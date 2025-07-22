# Dockerfile

# 1. Builder Stage: Install dependencies and build the project
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies using the flag that fixes your conflict
RUN npm install --force

# Copy the rest of your source code
COPY . .

# Build the Next.js application
RUN npm run build


# 2. Runner Stage: Create the final, small production image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./

# Copy the static assets
COPY --from=builder /app/public ./public

# The standalone output includes a server.js file. We will run this.
CMD ["node", "server.js"]