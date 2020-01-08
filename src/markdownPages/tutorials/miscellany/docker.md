---
path: "/tutorials/miscellany/docker"
date: "2019-08-11"
title: "Docker"
---

Docker is an incredibly useful tool for containerising applications. This tutorial will give you some of the basics for using the application and creating your own containers.

You may need to start the docker service:

```
systemctl start docker
```

```
docker info
```
Tells you if docker is running.

```
docker pull
```
Pulls/downloads an image to the local image list.
```
docker run
```
Starts an image. Also  pulls an image if it isn't present in the local list already.
```
docker pull nginx:1.16.0-alpine
```
An example of an image being pulled
```
docker images
```
Shows local images.
```
docker image rm <imageID>
```
Deletes a specific image from the local images.
```
docker run --name <containerName> -d -p 80:80 <imageName>
```
* *--name \<containerName>* - You can give the container a useful name.
* *-d* - Start the container in detached mode (i.e. background).
* *-p 80:80* - Maps the host prot to the container. The format is hostPort:containerPort.
* *\<imageName>* - The name of the docker image you're building from.

```
docker ps
```
Shows the running containers. You can add the *-a* flag to the end to show all containers, including the non-running one.
```
docker start <containerName>
```
Starts a container.
```
docker stop <contatainerName>
``` 
Stops the running container.
```
docker restart <containerName>
```
Restarts a container
```
docker rm <containerName>
```
Deletes the specified container.
```
docker exec -ti <containerName> /bin/sh
```
This will start a shell session on the given container.

**N.B. Consider Docker containers to be stateless, this is one of the reasons Docker is great, because you can tear down containers and bring them back up as and when you need them. With that in mind don't edit docker containers, instead edit DockerFiles or Compose files.**

```
docker run --name <containerName> -d -p 80:80 -v <fileOnHost>:<directoryOnContainer>:ro <imageName>
```
This will take a file from the host and places it on the container. The *:ro* makes the file read only. this is useful for placing config files.

##DockerFile
A DockerFile is used to configure and build a Docker image. This is useful where a pre-made image doesn't quite fit your requirements.
**N.B. The dockerfile must be called Dockerfile in order to run properly.**

```docker
#Custom .conf file for the image
FROM nginx:1.16.0-alpine
MAINTAINER me@example.com
COPY ./nginx.conf /etc/nginx/nginx.conf
```
* *FROM* - Denotes the base image for the custom image you're creating.
* *MAINTAINER* - Specifies the maintainer of the image.
* *COPY* - Says to copy a file from the host to a location on the image.

Each line in the file acts as a layer and build in a consecutive manner. If you change a layer the image will only build from the layer that changed.

```
docker build -t myImage:1.0 .
```
* *-t* - Denotes the name of the new image.
* . - This is the location of the Dockerfile you're building from.

```
docker cp <container_name>:<file_on_docker_container> <location_on_host>
```
Copies a file from a container to the location on the host.
```
docker cp <location_on_host> <container_name>:<file_on_docker_container>
```
Copies a file from the host to the container.
```
docker logs
```
Shows the run logs for your container. You can add a container IP to the end of this to specify which one you would like the logs from.
