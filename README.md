Users Management API

This is a Users Management API that allows you to perform CRUD (Create, Read, Update, Delete) operations on Users details.

API Endpoints

1. Add users details
   Endpoint: POST /api/users

Description: Add a new users details to the database.
Usage: Send a POST request to /api/users with a JSON body containing users data, including name, email, phoneNumber and address

2. Get users details by specific users ID

Endpoint: GET /api/users:id

Description: Retrieve a specific users details by its ID.
Usage: Send a GET request to /api/users:id, replacing :id with the ID of the users you want to retrieve.

3. Update users details specific users ID

Endpoint: PUT /api/users:id

Description: Update the information of a users details by its ID.
Usage: Send a PUT request to /api/users:id, replacing :id with the ID of the users you want to update. Include a JSON body with the updated users data.

4. Delete users details by ID

Endpoint: DELETE /api/users:id

Description: Delete a users details from the database by its ID.
Usage: Send a DELETE request to /api/users:id, replacing :id with the ID of the users you want to delete.

#How to Set Up and Run the Application Locally

1.Clone the repository to your local machine:

2.Change into the project directory:

3.Install the required dependencies: using npm i

4.Configure your database connection details in your application

5.Start the application:The API should now be running locally and accessible at http://localhost:8000.

6.if you want to access in online you use https://customer-management-api-bt28.onrender.com this URL in postman with provided api endpoint

#Decisions and Assumptions

During the development process, the following decisions and assumptions were made:

The API is built using Node.js and Express.js for simplicity.

MongoDB is used as the database system.

The API assumes a specific data structure for users details including name, email, phoneNumber and address.

The API returns JSON responses for ease of integration with other applications.
