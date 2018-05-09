


# TasksApp
> ### This project is about task management where admin can manage users, add tasks and assigns them to users and user will be able to view his tasks and can post feedback against a task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3 to practice web  application development with Angular that interacts with an actual backend server including CRUD operations, authentication and more.

# Getting started

### Clone the repo

```shell
git clone https://github.com/mujinxb/tasks-app-angular
cd tasks-app-angular
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
```
### Development server  
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Shut it down manually with `Ctrl-C` to stop it.

### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Making requests to the backend API

For backend we have used Laravel 5.5. You can view [the API spec here](https://github.com/mujinxb/tasks-backend/blob/master/readme.md) which contains all routes & responses for the server.

The source code for the backend server can be found in the [tasks-backend repo](https://github.com/mujinxb/tasks-backend).

If you want to change the API URL to your local server, simply edit `src/environments/environment.ts` and change `api_url` to the local server's URL (i.e. `localhost:3000/api`)

## Functionality overview

**General functionality:**

- Authenticate users via JWT (login + logout button on header)
- CRUD Users (user can only Read its profile)
- CRUD Tasks (user can view his tasks only)
- CR*D Feedback on Tasks (only user can create feedback, admin can read and delete)
- GET and display lists of all Tasks (admin)
- GET and display list of all Users(admin)
- Mark an assigned task completed (user)

**The general functionality breakdown looks like this:**

- ### Admin can manage the users
    - create user
    - edit user (name, email, password, status, role)
    - delete user
    - view user details
        - view user basic information
        - view tasks assigned to user
        - view feedbacks given by this user
    - view list of all users
        - view user basic information as card

- ### Admin can manage tasks
    - create task
    - edit task
    - delete task
    - view task details
        - view task description
        - assign users this task
        - view users who are assigned this task
        - view feedbacks by all users against this task
        - delete feedback given by any user
          
- ### Authenticated User can 
    - view his basic information 
    - view tasks assigned to his
    - view task details of an assigned task
        - mark the assigned task as completed
        - task description
        - feedback given by  user against this task
        - post a feedback agaist this task
    - view feedback given by this user against all tasks
