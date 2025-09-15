# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for development)
RUN npm ci

# Copy source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]