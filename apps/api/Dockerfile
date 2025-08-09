# API Dockerfile (pour Ionos Deploy Now Docker)
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm i --omit=dev
COPY . .
WORKDIR /app/apps/api
RUN npm ci --omit=dev || true
EXPOSE 3001
CMD ["node","server.js"]
