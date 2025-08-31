# Environment Setup Guide

This guide explains how to set up your environment variables for the SPLT Wheels application.

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

### Database Configuration

```bash
# SQLite database URL for local development
DATABASE_URL="file:./dev.db"
```

### NextAuth Configuration

```bash
# Generate a secure secret: openssl rand -base64 32
AUTH_SECRET="your-secret-key-here"
```

### Application Configuration

```bash
NODE_ENV="development"
```

## Optional Environment Variables

### NextAuth Discord Provider

```bash
# Get these from Discord Developer Portal: https://discord.com/developers/applications
AUTH_DISCORD_ID="your-discord-client-id"
AUTH_DISCORD_SECRET="your-discord-client-secret"
```

### External API Keys (add as needed)

```bash
# Payment Processing
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Email Services
SENDGRID_API_KEY="SG..."
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Cloud Services
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="us-east-1"
AWS_S3_BUCKET="your-bucket-name"

# Analytics and Monitoring
GOOGLE_ANALYTICS_ID="G-..."
SENTRY_DSN="https://..."

# Redis (for session storage in production)
REDIS_URL="redis://localhost:6379"

# CDN Configuration
CDN_URL="https://your-cdn.com"
CLOUDINARY_URL="cloudinary://..."

# Payment Processing
PAYPAL_CLIENT_ID="..."
PAYPAL_CLIENT_SECRET="..."

# Social Media
FACEBOOK_APP_ID="..."
GOOGLE_CLIENT_ID="..."
TWITTER_API_KEY="..."
TWITTER_API_SECRET="..."

# File Upload
MAX_FILE_SIZE="5242880"
ALLOWED_FILE_TYPES="jpg,jpeg,png,gif,webp"
```

## Security Best Practices

1. **Never commit `.env` files to version control**
   - The `.gitignore` file is configured to exclude all `.env` files
   - Only commit `.env.example` files with placeholder values

2. **Generate secure secrets**

   ```bash
   # Generate a secure AUTH_SECRET
   openssl rand -base64 32
   ```

3. **Use different values for different environments**
   - Development: Use test/development API keys
   - Staging: Use staging API keys
   - Production: Use production API keys

4. **Rotate secrets regularly**
   - Change AUTH_SECRET periodically
   - Rotate API keys when possible

5. **Use environment-specific files**
   - `.env.local` for local development
   - `.env.production` for production
   - `.env.test` for testing

## Environment Setup Steps

1. **Copy the example file**

   ```bash
   cp .env.example .env
   ```

2. **Generate a secure AUTH_SECRET**

   ```bash
   openssl rand -base64 32
   ```

3. **Update the .env file with your values**

   ```bash
   DATABASE_URL="file:./dev.db"
   AUTH_SECRET="your-generated-secret"
   NODE_ENV="development"
   ```

4. **Add any additional API keys as needed**

5. **Restart your development server**
   ```bash
   yarn dev
   ```

## Production Deployment

For production deployment:

1. **Set environment variables in your hosting platform**
   - Vercel: Use the Vercel dashboard
   - Netlify: Use the Netlify dashboard
   - Railway: Use the Railway dashboard
   - Docker: Use docker-compose or Docker secrets

2. **Use production-grade secrets**
   - Generate new AUTH_SECRET for production
   - Use production API keys
   - Enable HTTPS only

3. **Database configuration**
   - Use a production database (PostgreSQL, MySQL, etc.)
   - Set up proper connection pooling
   - Configure backups

## Troubleshooting

### Common Issues

1. **"Invalid environment variables" error**
   - Check that all required variables are set
   - Ensure AUTH_SECRET is properly generated
   - Verify DATABASE_URL format

2. **Database connection issues**
   - Ensure the database file path is correct
   - Check file permissions
   - Verify SQLite is installed

3. **Authentication not working**
   - Verify AUTH_SECRET is set
   - Check NextAuth configuration
   - Ensure proper redirect URLs

### Validation

The application uses `@t3-oss/env-nextjs` for environment validation. If you see validation errors:

1. Check the console output for specific missing variables
2. Ensure all required variables are present in your `.env` file
3. Restart the development server after making changes

## Support

If you encounter issues with environment setup:

1. Check the [T3 Stack documentation](https://create.t3.gg/)
2. Review the [NextAuth.js documentation](https://next-auth.js.org/)
3. Check the [Prisma documentation](https://www.prisma.io/docs/)
