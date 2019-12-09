# **DI Infrastructure**

This example includes:

1. Dockerfile and docker-compose
1. Minikube 
1. Buildkite to push an image to quay
1. Add a vault server to secure the process

## **Docker-compose**
To build the nodejs app locally is needed to run the command 
```docker-compose up``` in the path ```DITeambuildkite```

## **Minikube**
The next steps must be followed:
1. Start minikube `minikube start`
1. Create the deployments `kubectl apply [deployment.yml]`
1. Create the services `kubectl apply [service.yml]`
2. Run `minikube tunnel` to expose the service
1. Run `kubectl get all` to ensure that the services are running
3. Go to **http://nodejsservice.default.svc.cluster.local:3000/**

## **Run an agent and push to quay**

To run an agent and vault server is needed go to the path ```buildkite_agent``` and run: 

```docker-compose up``` that enables the agent and the vault server.

Then make changes in the code, commit and push the pipeline will be running
