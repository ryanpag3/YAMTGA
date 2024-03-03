FROM node:lts

WORKDIR /usr/src/app

# copy build files
COPY prisma ./prisma
COPY package*.json ./
COPY yarn.lock ./

# install dependencies
RUN yarn install

# generate prisma library from schema
RUN npx prisma generate

# copy source
COPY . .

# compile typescript
RUN npx tsc

EXPOSE 3000

ENTRYPOINT ["yarn"]
CMD ["start"]