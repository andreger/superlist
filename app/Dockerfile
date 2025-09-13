# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Expose port 3200
EXPOSE 3200

# Start the application
CMD ["serve", "-s", "dist", "-l", "3200"]