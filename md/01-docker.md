# docker-compose.yml
```yml
version: "3"
services:
  db:
    image: postgres
    restart: always
    ports:
      - "5432:5432"
    environment:a
      POSTGRES_PASSWORD: pass123
```