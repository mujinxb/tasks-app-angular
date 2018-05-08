# TasksApp - [tasks-app-angular](https://github.com/mujinxb/tasks-app-angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## install node packages

Run `npm install` to install required node packages

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Backend api

Project uses backed api built in Laravel. To view the backend src/docs visit [tasks-backend](https://github.com/mujinxb/tasks-backend).


# Features

- ## Admin features

    - ### Admin can manage the users
        - create user
        - edit user (name, email, password, status, role)
        - delete user
        - view user details
            - view user basic info
            - view tasks assigned to user
            - view feedbacks given by this user
        - view list of all users
            - view user basic info as card

    - ### Admin can manage tasks
        - create task
        - edit task
        - delete task
        - view task details
            - view task description
            - assign this task to users
            - view users who are assigned this task
            - view feedbacks by all users against this task
            - delete feedback given by any user

- ## User features
    - ### Authenticated User can 
        - view its basic info 
        - view tasks assigned to it
        - view task details of an assigned task
            - mark the assigned task as completed
            - task description
            - feedbacks given by this user against this task
            - post a feedback agaist this task
        - view feedbacks given by this user against all tasks
    
- ## Authentication
    - Project uses jwt tokens for authentication

    - ### Routes are protected by guards
        - auth guard
            - checks whether user is loggedin or not using AuthService isLoggedin() method, retrun true if logged in else redirect to login - - page along with current page url
                - isloggedin() method simply checks the the presence of token in localstorage and its expiry using jwtService
                - return true if token is present and not expired else returns false

        - admin guard
            - checks whether a user is admin or not using UserService
            - return  true is user isAdmin else false

        - guest guard
            - returns true if user is not loggedin else redirect to home and return false

    - ### Components and elements are protected using directives
        - all these directive are bound to user object of type AuthUser which parent componet take from UserService

        - admin directive
            - displays the element only if user is authenticated  and  is admin

        - user directive
            - displays the element only if user is authenticated  and  is not admin

        - auth directive
           - displays the element only if user is authenticated  (user can be admin or simple user)

        - no auth directive
           - displays the element only if user is not  authenticated I.e not loggedin

- ### Interceptor
    - An Interceptor which adds headers to the outgoing http request
    - 'Content-Type': 'application/json'
    - 'Accept': 'application/json'
    - additionally  add ‘Authorization’: ‘Bearer token if token is present’

- ### Services
    - a generic api service to perform http requests
    - AuthService to authicate User
    - UserService to get Authetnicated user data and login/logout
    - TasksApiService, FeedbacksApiService and UserApiService to perform http request 