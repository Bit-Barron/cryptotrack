# Stage 0: Install dependencies
FROM node:lts AS deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 1: Build application
FROM deps AS builder
WORKDIR /app

COPY . .
RUN yarn build

# Stage 2: Production image
FROM node:lts AS prod
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Ensure Next.js environment is set to production

CMD ["yarn", "start"]
