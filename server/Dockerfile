# Dockerfile
# Use the official Node.js image with your version
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Update npm to the latest version
RUN npm install -g npm@latest

# Copy the rest of your application
COPY . .

# Compile TypeScript files
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"]
