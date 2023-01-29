# user registration fullstack project
* It is a very basic project.
* In this project I made 3 routes 
1. for home page - `/` || `/home`
2. for register a user - `/register`
3. for login a user - `/login`

* I did not handle any validation over here, because I have not enough time today to do so . I will work on this project on next Saturday and Sunday.

# Setting-up the application -
* first of all please clone the code on your local machine using command - 
`https://github.com/mnu4513/user_registration.git`
* after sucessfull cloning the application please use command `cd user_registration`
* then open src/app.js file and porvide your mongoDB connection link over there, on line number 57 
* after providing connection string, this should look like - `const connectionString = "mongodb+srv://userName:<password>@firstcluster.daae6aq.mongodb.net/collectionName"`
* after setting-up all things please run start server using command `npm start`
* and now you are ready to visit on this website

**NOTE -** please use port 3000 for this time because this is a very basic website and I didn't use routhing in a proper way, but I am working on it.

# pages -
`please start server before visiting any page`

**home -**
* to visit on the homepage please use `localhost:3000` or use `localhost:3000/home`
* home page has a welcome message and regesiter and login links only. 

**register -**
* while registering a user, we have to use `localhost:3000/register` url 
* after that we have to provide user's details in request body or we can provide it from browser, I have made a from with input fields to provide the user's detials.
if we will user postman to provide the data then our data will look like 
```
{
    "name": "name of user",
    "email": "example@xyz.com"
    "password": "abc123"
}
```
* after creatin a user, user's data , on the DB will look like - 
```
{
"_id": "63d6157bbd8015c8aceabea5"
"name": "name of user"
"email": "example@xyz.com"
"password": "abc123",
"__v": "0"
}
```

**login -**
* while logging in a user, we have to use `localhost:3000/login` url 
* after that we have to provide user's details in request body or we can provide it from browser, I have made a from with input fields to provide the user's detials.
if we will user postman to provide the data then our data will look like 
```
{
    "email": "example@xyz.com"
    "password": "abc123"
}
```
* in case of wrong email or password it will retrun the response with an error message. and response will look like -
```
{
    "status": false,
    "message": "email or password is invalid"
}
```
* after successful ligging in of a user, user's data , in the response will look like - 
```
{
"status": false,
"message": "name of user is sucessfully logged in"
"name": "name of user"
"email": "example@xyz.com"
}
```
