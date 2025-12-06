# --------------------------
# Base image
# --------------------------
FROM node:lts AS base
WORKDIR /app

# Install dependencies separately to use cache effectively
COPY package.json package-lock.json ./

# --------------------------
# Production dependencies
# --------------------------
FROM base AS prod-deps
RUN npm ci --omit=dev

# --------------------------
# Build dependencies
# --------------------------
FROM base AS build-deps
RUN npm ci

# --------------------------
# Build the project
# --------------------------
FROM build-deps AS build
COPY . .
RUN npm run build

# --------------------------
# Runtime image
# --------------------------
FROM node:lts AS runtime
WORKDIR /app

# Copy only production modules
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy built assets
COPY --from=build /app/dist ./dist

# Copy server (Astro SSR / Hono / Express)
COPY server.js .

# Server environment
ENV HOST=0.0.0.0
ENV PORT=6500
EXPOSE 6500

CMD ["node", "server.js"]
