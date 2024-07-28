# Use the official Node.js image as a base image
FROM node:16

# Set the working directory
WORKDIR /app

# Install Yarn globally
# RUN npm install -g yarn

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
