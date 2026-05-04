## مصطفى محمود | مكتبة رقمية
> A digital library website for the Egyptian writer and philosopher **Mustafa Mahmoud**

## 🔗 [Live Demo](https://mustafa-mahmoud-library.web.app)


## About

- I built this project out of my admiration for Dr. Mustafa Mahmoud — a writer who bridges science, philosophy, and faith in a way that speaks to every mind.

- The website serves as a complete digital archive of his 81 books, quotes, and TV program episodes, built with a focus on clean UI and smooth user experience.

## Tech Stack

![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Pinia](https://img.shields.io/badge/Pinia-3-FFD859?logo=pinia)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?logo=firebase)

---

## Features

- 📚 Browse and download 81 books with category filter
- 💬 Read quotes from different books with load more
- 📺 Watch episodes from the TV program "Al-Aql wal-Iman"
- 🎨 Fully responsive design (mobile & desktop)
- ⚡ Fast performance with local JSON data

---

## Project Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production Build

```sh
npm run build
```

---

## Run with Docker

***If you want to run using Docker, follow these steps :***

### 1️⃣ Build and start the containers

```
docker compose up --build
```

> The application will be available at : http://localhost:5173

### 2️⃣ Stop containers
```
docker compose down
```
---

### Run with Docker (Without Cloning the Repo)

***If you want to run the app directly with Docker, without cloning the repository::***

### 1️⃣ Pull the Docker image from Docker Hub
```
docker pull m1234x/library-website:latest
```

### 2️⃣ Run the Docker container
```
docker run -d -p 80:80 --name library-website m1234x/library-website:latest
```
> The application will be available at : http://localhost
