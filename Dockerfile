# Backend Dockerfile
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application (ensure server.ts and app.ts are included)
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]
