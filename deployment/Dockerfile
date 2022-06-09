
# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

ARG VERSION
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# add all files from previous stage into docker image
COPY next.config.js package.json ./
COPY node_modules ./node_modules
COPY public ./public
COPY --chown=nextjs:nodejs .next ./.next

RUN echo ${VERSION} > public/version.txt
RUN echo ${NODE_ENV} > public/env.txt
USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
