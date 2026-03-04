

> library website by the writer **Mustafa Mahmoud**
********************************

- This template should help get you started developing with Vue 3 in Vite.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

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
