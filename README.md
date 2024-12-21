# Bcrypt Generator Web Application

## Overview

This is a web application that allows users to generate bcrypt hashes and verify passwords against stored bcrypt hashes. It is built with ReactJS for the frontend and Golang for the backend. The application consists of two main components:

- *Frontend*: A ReactJS application to interact with the user.
- *Backend*: A Go (Golang) API to generate bcrypt hashes and check passwords against them.

## Features

- Generate bcrypt hashes for a given password.
- Check if a given password matches a stored bcrypt hash.
- Responsive and user-friendly frontend built with ReactJS.
- RESTful API backend built with Golang.

## Tech Stack

- *Frontend*: ReactJS, CSS
- *Backend*: Golang, Gorilla Mux
- *Database*: None (Just bcrypt hashing)
- *Containerization*: Docker
- *API Communication*: JSON over HTTP

## Prerequisites

Ensure you have the following installed:

- *Docker*: To build and run the application in containers.
- *Docker Compose*: For orchestrating both frontend and backend services.
- *Go (Golang)*: For running the backend locally (optional, if not using Docker).
- *Node.js*: For building and running the frontend locally (optional, if not using Docker).

## Project Setup

### 1. Clone the repository

```bash
https://github.com/imrkgofficial/bcrypt-generator-frontend.git
