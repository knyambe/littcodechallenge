# The LITT Challenge

This is my attempt at completing the LITT Code Challenge.

## The application
This application has two components, a **backend API** and a **frontend SPA**. The backend is build in Laravel, while the fronend is build with Angular 11.
To run the application, you will need to have:
- NodeJS/NPM installed
- A MySQL server engine
- A PHP server environment
Both components should be run from within a PHP server environment.

### Setting up the backend API
1. Create a MySQL database (you can name it whatever you like)
2. Copy the `.env-example` file and change the name of the new copy to `.env`
3. Open the `.env` file and change the values on lines 13, 14, 15 to your database specific values. Change other Database values as appropriate.
4. Open the commandline/terminal and navigate to the root folder of the application.
5. Run the following command `php artisan key:generate`.
6. Then run the following command `php artisan migrate`.
7. And finally run the following command `php artisan db:seed`.

Your new database tables should now be populated with some seed data

### Setting up the frontend SPA
The frontend server has already been prepackaged, but you may need take some setup steps especially if you inted to do a rebuild.
1. From the commandline/terminal navigate to ./app-front-end.
2. Run `npm install`.

### Running the application
If you're using the built in Laravel development server, you may run the application via the `php artisan serve` command. Otherwise you may use a server setup of your choice.
