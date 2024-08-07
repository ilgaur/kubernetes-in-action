FROM node:18-alpine
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]
