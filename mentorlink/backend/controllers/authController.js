import User from "../models/User.js";
import { generateToken } from "../utils/jwtUtils.js";

/**
 * Sign Up Controller
 * Creates a new user account with validation
 */
export const signUp = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    // Input validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: fullName, email, password",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered. Please use a different email or sign in.",
      });
    }

    // Create new user (password will be hashed by schema pre-save hook)
    const newUser = await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    // Generate JWT token
    const token = generateToken(newUser._id);

    // Return user without password
    const userResponse = newUser.toJSON();

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      token,
      user: {
        id: userResponse._id,
        fullName: userResponse.fullName,
        email: userResponse.email,
      },
    });
  } catch (err) {
    console.error("[SignUp Error]", err);

    // Handle validation errors from schema
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    // Handle duplicate key error
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

/**
 * Sign In Controller
 * Authenticates user and returns success status
 */
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user and explicitly select password field
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare passwords using schema method
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Return success response
    const userResponse = user.toJSON();

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: userResponse._id,
        fullName: userResponse.fullName,
        email: userResponse.email,
        profilePicture: userResponse.profilePicture,
      },
    });
  } catch (err) {
    console.error("[SignIn Error]", err);
    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

/**
 * Google OAuth Callback
 * Handles the callback after Google has authenticated the user
 */
export const googleCallback = async (req, res) => {
  try {
    // Generate JWT token
    const token = generateToken(req.user._id);
    
    // Redirect to frontend with token and user data
    res.redirect(
      `${process.env.FRONTEND_URL || 'http://localhost:3000'}/auth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify({
        id: req.user._id,
        fullName: req.user.fullName,
        email: req.user.email,
        profilePicture: req.user.profilePicture,
      }))}`
    );
  } catch (err) {
    console.error("[Google Callback Error]", err);
    res.redirect(
      `${process.env.FRONTEND_URL || 'http://localhost:3000'}/login?error=google_auth_failed`
    );
  }
};
