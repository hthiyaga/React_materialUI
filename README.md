version: '3.1'
services:
  mongodb:
    image: mongo:3.6
    ports:
      - 27017:27017

  mariadb:
    image: docker.pkg.github.com/traderinteractive/sauce/marketplace-mariadb:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
    ports:
      - 3306:3306

  solr:
    image: docker.pkg.github.com/traderinteractive/sauce/marketplace-solr:latest
    ports:
      - 8983:8983
