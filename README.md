# MERN Stack

A basic MERN stack, there is another version of this in which Nginx is used a as a gateway to the application allowing for faster static file transfers, and more secure communication between the client and API.

This can be restructured into microservices. 

## Nginx

This container works differently to my other compose projects.
Only a single point of entry is exposed on port: <code>:8080</code>. From this nginx acts as a gateway to handle routing to either the <code>client</code> or the <code>api</code>

Client Routes:
 - [localhost:8080/](http://localhost:8080/)

API Routes:
 - [localhost:8080/api/](http://localhost:8080/api/)

Mongo Express: 
 - [localhost:8081/](http://localhost:8081)

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Next, navigate in your terminal to the directory you cloned this, and spin up the containers for the web server by running `docker-compose up -d --build`.

- **react** - `:3000`
- **mongodb** - `:27017`
- **mongo-express** - `:8081`
- **node** - `:3000`
- **nginx** - `:8080`

## Persistent Mongo Storage

Persistent storage is handled by a docker volume, this ensures that when you take down and spin up containers your data is not lost. 

## Networked

Everything in this docker setup is networked to ensure it can only communicate with each other. This makes this project akin to a single service built with a separate client and api. 
