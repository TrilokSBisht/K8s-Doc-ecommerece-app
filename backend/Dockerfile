FROM node:22-alpine

WORKDIR /app

COPY backend/package*.json ./

RUN npm ci --omit=dev

COPY backend/ ./

COPY docs/ /docs/

ENV NODE_ENV=production

EXPOSE 4001

CMD ["node", "server.js"]
