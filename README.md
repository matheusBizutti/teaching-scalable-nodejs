# Node API SCALE

## Overview

This project is designed to help developers learn and practice *scalable architecture* and *Node.js* development. It's a hands-on guide to understanding how to build APIs with *Node.js*, manage databases, and implement scalable solutions using modern tools.

Whether you're new to backend development or looking to deepen your skills in Node.js, this project will provide practical examples and strategies to develop efficient, scalable APIs.

## Goals

•⁠  ⁠*Learn Node.js*: Build API's applications with Node.js, focusing on best practices.
•⁠  ⁠*Understand Scalable Architecture*: Learn how to design and build scalable backend systems.
•⁠  ⁠*Practice with Databases*: Set up and interact with databases, starting with SQL and expanding to NoSQL solutions.
•⁠  ⁠*Cloud Integration*: Implement cloud-native patterns with AWS or other cloud services.
•⁠  ⁠*Trunk-Based Development*: Follow trunk-based development for continuous delivery and collaboration.

## Getting Started

## Prerequisites

Make sure you have these installed on your machine:

•⁠  ⁠[Docker](https://docs.docker.com/get-docker/)
•⁠  ⁠[Docker Compose](https://docs.docker.com/compose/install/)
•⁠  ⁠[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

## Step-by-step setup and run instructions

### 1. Clone the repository
⁠ bash
git clone https://github.com/matheusBizutti/teaching-scalable-nodejs.git
cd teaching-scalable-nodejs
 ⁠

### 2. Start the Docker Containers
⁠ bash
docker-compose up -d
 ⁠

### 3. Run database migrations
⁠ bash
docker-compose exec app-1 npx prisma migrate dev --name init
 ⁠

### 4. Acces the app in your browser
⁠ bash
http://localhost:3000
