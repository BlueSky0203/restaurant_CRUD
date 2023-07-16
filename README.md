# Restaurant

![image](https://github.com/BlueSky0203/restaurant_CRUD/blob/main/public/picture/restaurant.png)

## Introduction
- Display restaurant data of homepage (image, name, category, rating)
- CRUD function (create, read, update, delete) RESTful API style
- if you want to go back the homepage, click the top left side (我的餐廳清單)

### Function
  - create restaurant data
  - read restaurant detail
  - edit restaurant data
  - delete restaurant data

## Instruction
1. make sure install node.js and npm

2. clone git to local

3. open to local, use cmd to enter the folder, then input:

```bash
npm install
```

4. setting environment variables to coneect with MongoDB

```bash
URL=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
```

5. then input:

```bash
nodemon app.js
```

6. if see app is running and mongoDB connected, open web browser enter the url

```bash
http://localhost:3000
```

7. stop to use

```bash
ctrl + c
```

## Development tools
  - Node.js 18.16.0
  - Express 4.18.2
  - Express-handlebars 7.0.7
  - Bootstrap 5.2.3
  - Font-awesome
  - Mongoose 7.3.4
  - MongoDB
  - Nodemon 2.0.22
  - Method-override 3.0.0