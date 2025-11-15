import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import { Strategy as GitHubStrategy } from 'passport-github2';

// At the top of passport.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Verify required environment variables
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.error("❌ Missing Google OAuth configuration. Please check your .env file");
  process.exit(1);
}

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists with this Google ID
        let user = await User.findOne({ providerId: profile.id, provider: "google" });

        if (user) {
          return done(null, user);
        }

        // Check if user exists with this email
        user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          // Link Google account to existing user
          user.provider = "google";
          user.providerId = profile.id;
          user.profilePicture = profile.photos[0]?.value || null;
          await user.save();
          return done(null, user);
        }

        // Create new user
        const newUser = await User.create({
          fullName: profile.displayName,
          email: profile.emails[0].value,
          provider: "google",
          providerId: profile.id,
          profilePicture: profile.photos[0]?.value || null,
        });

        return done(null, newUser);
      } catch (err) {
        console.error("Error in Google OAuth callback:", err);
        return done(err, null);
      }
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/github/callback`,
      scope: ['user:email'] // Request email scope
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find user by GitHub ID
        let user = await User.findOne({ providerId: profile.id, provider: "github" });

        if (user) {
          return done(null, user);
        }

        // Try to find by email (GitHub might not return email)
        const email = profile.emails?.[0]?.value;
        if (email) {
          user = await User.findOne({ email });
        }

        if (user) {
          // Link GitHub account to existing user
          user.provider = "github";
          user.providerId = profile.id;
          user.profilePicture = profile.photos?.[0]?.value;
          await user.save();
          return done(null, user);
        }

        // Create new user
        const newUser = await User.create({
          fullName: profile.displayName || profile.username,
          email: email || `${profile.username}@users.noreply.github.com`,
          provider: "github",
          providerId: profile.id,
          profilePicture: profile.photos?.[0]?.value
        });

        return done(null, newUser);
      } catch (err) {
        console.error("GitHub OAuth error:", err);
        return done(err, null);
      }
    }
  )
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.error("Error deserializing user:", err);
    done(err, null);
  }
});

export default passport;