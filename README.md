<br />
<div align="center">
<h3 align="center">📚book-shelf</h3>

  <p align="center">
    A lightweight backend service for managing a personal digital library.
  </p>
</div>

---

### Requirements

Before you begin, make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started) (v28.2.2 or higher recommended)

---

### Overview

**`book-shelf`** is a backend project for managing a personal digital library.  
It provides API endpoints for handling books, authors, genres, and publishers — built for simplicity, scalability, and easy integration with future frontends or mobile apps.

---

### Installation Guide

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Dhaboav/book-shelf.git
    ```

2. **Set up the environment file:**

    Copy the `.env.example` file to `.env` to configure environment variables:

    - **On Windows:**

        ```bash
        copy .env.example .env
        ```

    - **On macOS/Linux:**

        ```bash
        cp .env.example .env
        ```

3. **Build docker image:**

    ```bash
    docker compose build
    ```

4. **Run the container in local:**

    ```bash
    docker compose up
    ```
