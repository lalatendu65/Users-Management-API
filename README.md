Customer Management API

This is a Customer Management API that allows you to perform CRUD (Create, Read, Update, Delete) operations on Customer details.

API Endpoints
1. Add customer details 
Endpoint: POST /addCustomer

Description: Add a new Customer details to the database.
Usage: Send a POST request to /addCustomer with a JSON body containing customer data, including name, email, phoneNumber and address

2. Get Customer details  by specific Customer ID

Endpoint: GET /customerdetails/:id

Description: Retrieve a specific Customer details by its ID.
Usage: Send a GET request to /customerdetails/:id, replacing :id with the ID of the Customer you want to retrieve.

3. Update Customer details specific Customer ID
   
Endpoint: PUT /customerdetailsUpdate/:id

Description: Update the information of a Customer details  by its ID.
Usage: Send a PUT request to /customerdetailsUpdate/:id, replacing :id with the ID of the Customer you want to update. Include a JSON body with the updated Customer data.

4. Delete Customer details by ID
   
Endpoint: DELETE /customerdetailsDelete/:id

Description: Delete a Customer details from the database by its ID.
Usage: Send a DELETE request to /customerdetailsDelete/:id, replacing :id with the ID of the customer you want to delete.

#How to Set Up and Run the Application Locally

1.Clone the repository to your local machine:

2.Change into the project directory:

3.Install the required dependencies: using npm i 

4.Configure your database connection details in your application

5.Start the application:The API should now be running locally and accessible at http://localhost:8000.

6.if you want to access in online you use https://customer-management-api-bt28.onrender.com this URL in postman with provided api endpoint 

#Decisions and Assumptions
During the development process, the following decisions and assumptions were made:
