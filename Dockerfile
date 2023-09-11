FROM node:16-alpine AS base

RUN apk update; apk add curl bash
RUN curl -L https://unpkg.com/@pnpm/self-installer | node

FROM base AS dependencies
WORKDIR /app
COPY package.json ./
RUN pnpm i

FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM base
WORKDIR /app
COPY --from=build /app/package.json .
COPY --from=build /app/pnpm-lock.yaml .
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "server.js" ]
