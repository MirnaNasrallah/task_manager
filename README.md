# Started at 1:15pm, Sunday 15/12/24

# Task Management Application

## Setup Instructions

### Back-End (Laravel)
1. Create a mysql database (using phpMyAdmin) with the name : `task_manager`
2. Import the sql file provided in the root directory `task_manager.sql` 
3. Navigate to the `task-api/` folder.
4. Run `composer install`.
5. Run `php artisan migrate` If you had trouble importing the sql file
6. Start the Laravel server with `php artisan serve`. save the link if it's not running on `http://127.0.0.1:8000`


### Front-End (Next.js)
1. Navigate to the `task-frontend/` folder.
2. Run `npm install`.
3. Add your backend url in the component file `\task-frontend\src\app\components\TaskList.tsx` 
(no need to add it if it's running on `http://127.0.0.1:8000` )
3. Start the Next.js server with `npm run dev`.

### API Endpoint
-- There's a provided postman collection `task_manager_api.postman` with all the api requests
- `GET /tasks`: Fetch the list of tasks.
- `STORE /tasks`: store a new task to the list of tasks.
- `PUT /tasks/id`: edit a task in the list of tasks.
- `DELETE /tasks/id`: delete a task the list of tasks.

-- for the hardcoded tasks:
- `GET http://127.0.0.1:8000/api/show`: Fetch the list of tasks.

## Approach
- The Laravel API provides task data, hardcoded or fetched from the database.
- The Next.js front-end fetches tasks from the Laravel API and displays them in a responsive layout with a very simple design.
