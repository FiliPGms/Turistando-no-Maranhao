# Use Node.js as the base image
FROM node:20-slim

# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Generate Prisma Client (uses schema in ./prisma/schema.prisma)
RUN npx prisma generate

# Expose port (if your app listens on one, though main.ts looks like a script)
# EXPOSE 3000

# Start the application:
# 1. Push the schema to the database
# 2. Run the main script
CMD npx prisma db push --accept-data-loss && npx tsx main.ts
