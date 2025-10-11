<div align="center">
  <h3 align="center">📚 Bookshelf</h3>

  <p align="center">
    A lightweight fullstack application for managing a personal digital library.
  </p>
</div>

---

## 🚀 Tech Stack – FARM Architecture

**Bookshelf** is built using the **FARM** stack:

- ⚙️ **FastAPI** – Backend API
- 🎨 **React** – Frontend UI
- 🗄️ **MySQL** – Relational Database
- 🐳 **Docker** – Containerization

---

## 📋 Requirements

Before getting started, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) – Version **28.2.2** or higher is recommended

---

## 🧭 Overview

**Bookshelf** is a fullstack FARM project designed to help users manage their personal digital libraries.  
It includes API endpoints for managing:

- Books 📖

Built with simplicity and developer-friendliness in mind.

---

## ⚙️ Installation Guide

Follow the steps below to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Dhaboav/bookshelf.git
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
