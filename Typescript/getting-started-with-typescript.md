# Getting Started With Typescript

Typescript compiles into Javascript.


## Installing Typescript

Install [Node.js](https://nodejs.org/en/download/) and npm v16+.


type `npm install -g typescript`


## Auto Refresh index.html` 

```
npm init
```
Hit Enter key to choose defaults.

```
npm install --save-dev lite-server
```

Edit package.json
```
{
  "name": "understandingtypescript",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.6.1"
  }
}


```

Now run the following:
```
npm start
```