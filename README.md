# TasksApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## install node packages

Run `npm install` to install required node packages

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Backend api

Project uses backed api built in Laravel


######################################################################################

## Basic App Structure

### Header component

    contains dashboard, tasks, assign task, users, login. Logout buttons protected by directives

### Dashboard component

    contains admin and user components, one will be shown based on user role (using directives)
    admin component  contains links to  tasks, assign task, users
    user component will contain list of assigned task to that user

## Authentication system

### Login functionality

    User provides the email and password on login screen
    email and password validation using template driven approach
    error messages are shown if email format is invalid or password is not provided
    submit button will remain disabled until email and password becomes valid
    on pressing login, a post request will be send to http://localhost/api/login with user email and password in the body.
    Sever will authenticate the user and will send user data conforming AuthUser model, user data and token will be stored in localstorage using UserService and user will be redirected to the dashboard
    or 401 response in case of email/password mismatch and error message will be show on login screen. 

### Routes are protected by guards
    auth guard
        checks whether user is loggedin or not using AuthService isLoggedin() method, retrun true if logged in else redirect to login page along with current page url
            isloggedin() method simply checks the the presence of token in localstorage and its expiry using jwtService
            return true if token is present and not expired else returns false

    admin guard
        checks whether a user is admin or not using UserService
        return  true is user isAdmin else false

    guest guard
        returns true if user is not loggedin else redirect to home and return false

### Components and elements are protected using directives
    all these directive are bound to user object of type AuthUser which parent componet take from UserService

    admin directive
        displays the element only if user is authenticated  and  is admin

    user directive
        displays the element only if user is authenticated  and  is not admin

    auth directive
        displays the element only if user is authenticated  (user can be admin or simple user)

    no auth directive
        displays the element only if user is not  authenticated I.e not loggedin

### Interceptor
    An Interceptor which adds headers to the outgoing http request
    'Content-Type': 'application/json'
    'Accept': 'application/json'
    additionally  add ‘Authorization’: ‘Bearer token if token is present’

### Api Service
    a generic api service to perform http requests