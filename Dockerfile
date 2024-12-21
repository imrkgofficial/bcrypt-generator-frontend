# Step 1: Build the React app using Node.js
FROM node:18-alpine AS build

# Set the working directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install the app dependencies
RUN npm install

# Copy the entire frontend source code to the container
COPY src ./src
COPY public ./public

# Expose port 3000 (default React development server port)
EXPOSE 3000

# Run the React development server (on port 3000)
CMD ["npm", "start"]
