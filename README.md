1.	Language: JavaScripts
2.	Platform: Visual Studio Code
3.	Software (backend): 
a)	Node.js: version: v16.9. ⭐
b)	Npm: version: v7.21.1 (for install package) ⭐
c)	Express: 8.5.3  ⭐
d)	Nodemon: (for npm start)
e)	Mysql database: Ver 8.0.28 for Win64 on x86_64 ⭐ 
4.	dependencies (front-end): 
"axios": "^0.26.1",  // for connect backend
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
5.	dependencies (back-end):
"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.3",
    "express-validator": "^6.14.0",
    "mysql": "^2.18.1",
    "uuid": "^8.3.2"
  }
6.	How to start the project:
a)	Load the sql file to load “whole_farm” database first!!!
b)	put project into visual studio code
c)	cd into client and server
d)	Open terminal, entering “npm install” (install the dependencies in front-end and back end)
e)	Go to server directory, find database.js in Util, change the user and other information. 
f)	Run “npm start” in client terminal, node index.js in the server terminal(npm start will be better, if you have nodemon). 
g)	You will see the there is a browser pop up ---- “Welcome to Node Farm!”
7.	Tips:
a)	If you cannot connect database for mysql version. You can try to use “mysql2” package to connect database. (“npm install mysql2”, “require mysql2 in /Util/database.js”)
