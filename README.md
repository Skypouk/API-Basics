# FullStack-GKE-Auth0 🌐🚀

This project demonstrates the integration of multiple technologies to build a modern and scalable web application. It consists of a backend built using **Python** and **FastAPI**, with authentication handled by **Auth0**. The frontend is a **React** application that communicates with the backend, and both services are containerized using **Docker** and deployed to **Google Kubernetes Engine (GKE)**.

## 📝 Overview

- **Backend**: Python **FastAPI** application that handles authentication via **Auth0** and stores data in a **PostgreSQL** database.
- **Frontend**: **React** application that integrates with the same **Auth0** authentication service.
- **Docker**: Dockerfiles for containerizing both backend and frontend services, along with a `docker-compose.yml` file for easy orchestration.
- **Kubernetes**: Kubernetes manifests for deploying the entire solution to **Google Kubernetes Engine (GKE)**, including configurations for **SSL** using **Let's Encrypt** and **Cert-Manager**.
- **CI/CD**: GitHub Actions to automate the deployment of Docker images to **Docker Hub** and the deployment of the entire solution to **GKE**.

## ⚡ Features

- **🔐 Auth0 Integration**: Secure authentication using **Auth0** for both backend and frontend applications.
- **🐘 PostgreSQL Database**: A **PostgreSQL** database is used to store data, with all database configurations set up for seamless operation.
- **🐳 Dockerized**: Dockerfiles and **Docker Compose** allow easy development and deployment.
- **☸️ Kubernetes Deployment**: Kubernetes manifests set up to deploy the solution to **GKE** with automated scaling and management.
- **🔒 SSL with Let's Encrypt**: **SSL** certificates are automatically generated and managed using **Cert-Manager** and **Let's Encrypt**.
- **🔄 CI/CD Pipelines**: GitHub Actions automate Docker image pushes to **Docker Hub** and deployment to **GKE**.

## 🛠️ Technologies Used

- **Backend**: Python 🐍, **FastAPI** ⚡, **Auth0** 🔑, **PostgreSQL** 🐘
- **Frontend**: **React** ⚛️, **Auth0** 🔑
- **Containerization**: **Docker** 🐳, **Docker Compose** 🔧
- **Orchestration**: **Kubernetes** ☸️, **Google Kubernetes Engine (GKE)** 🌍
- **CI/CD**: **GitHub Actions** ⚙️
- **SSL Certificates**: **Cert-Manager** 🔒, **Let's Encrypt** 🌐

## 🏗️ Architecture

- **Backend Service**: The backend is built with **FastAPI** and integrates with **Auth0** to manage user authentication. It stores data in a **PostgreSQL** database.
- **Frontend Service**: The frontend is a **React** application that communicates with the backend and also utilizes **Auth0** for authentication.
- **Docker Compose**: A `docker-compose.yml` file is used to run both the backend and frontend services together along with **PostgreSQL**.
- **Kubernetes**: The project is containerized with **Docker** and deployed to **Google Kubernetes Engine (GKE)** using Kubernetes manifests.
- **CI/CD Pipeline**: **GitHub Actions** are set up to automatically build and deploy Docker images to **Docker Hub**, as well as deploying the whole solution to **GKE**.
- **SSL Encryption**: **Cert-Manager** is configured to automatically generate free **SSL** certificates using **Let's Encrypt** for secure communication.
