# nodejs-app-mss

To start this application first you can get this repo code using below url

git clone https://github.com/LandmakTechnology/nodejs-application

cd nodejs-app-mss

npm install

**node app.js**

(OR) 

npm start

To execute Test cases, we will run the below command
npm test

To Execute the SonarQube Repor, execute the below command.

npm run sonar

(OR) 

node sonar-project.js


Generate the Nexus token by using base64 encoding as follows.

echo -n 'admin:passw0rd' | openssl base64

Create a .npmrc file in your project root directory and add below lines.

registry=<<NexusRepoURL>>
_auth=<<Token>>
email=<<EmailID>>
always-auth=true


In package.json add below entry,

"publishConfig": {

"registry": "http://IPAddress:8081/repository/nodejs-mithuntechnologies/"

}

  npm login --registry=NexusRepoURL
  
Execute below command to upload packages to nexus repo.

npm publish
  

