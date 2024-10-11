
# Assignment Submission Portal

The Assignment Submission Portal is a backend application developed using Node.js, Express, and MongoDB. It allows users to upload assignments and enables admins to review, accept, or reject them.


## Deployment/Run locally

To deploy this project, you can follow these steps:

### 1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Set up environment variables: 
Create a .env file in the root of your project directory and include the following lines:

```bash
PORT=5001
MONGO_URL="mongodb://localhost:27017/crud"
JWT_SECRET="your_jwt_secret"
```

### 3. Install dependencies: 
Run the following command to install the required packages:

```bash
npm install
```

### 4. Start the server: 
Use the command below to start your application:

```bash
npm start
```


## Features

- User Registration and Login: Users can register and log in.
- Admin Registration and Login: Admins can register and log in.
- Assignment Upload: Users can upload assignments for admins to review.
- Assignment Management: Admins can view, accept, and reject assignments.
- Token-Based Authentication: Admin and user sessions are managed using JWT tokens.
- Input Validation and Error Handling: Proper validation and error handling are in place for robust API functionality.
- Modular and Structured Code: The code is organized to be maintainable and scalable.

  
## Installation

Make sure you have the following prerequisites installed on your machine:


    Node.js 
    MongoDB (running locally or hosted)

Once you have these prerequisites, follow the steps under the Run Locally section to get the application up and running
    
## Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and assignment data.
- **Mongoose**: ODM library for MongoDB and Node.js.   
- **Body-parser**: Middleware to parse incoming request bodies.


## Usage/Examples

### Endpoints

    User Registration: POST /api/user/register
    User Login: POST /api/user/login
    Upload Assignment: POST /api/assignment/upload
    Get All Assignments for Admin: GET /api/assignment
    Accept Assignment: POST /api/assignment/:id/accept
    Reject Assignment: POST /api/assignment/:id/reject

### Example Request for Uploading Assignment

Using Postman, you can test the upload assignment feature with the following request:

POST http://localhost:5001/api/assignment/upload

Body:
```
{
    "userId": "John Doe",
    "task": "Hello World",
    "admin": "Alok"
}
```
# Current Status

### Working Endpoints:

    Admin Registration: POST /api/admin/register (Admin registration works perfectly)
    User Login: POST /api/user/login (Users can log in to the portal)
    Assignment Upload: POST /api/assignment/upload (Allows users to upload assignments)
    Admin Registration: POST /api/admin/register (Admin registration works perfectly)
    Assignment Acceptance/Rejection: POST /api/assignment/:id/accept and POST /api/assignment/:id/reject (Admins can accept/reject assignments)

### Endpoints Under Development:

The following endpoints are currently under review or fixing:

    Get All Admins: GET /api/admins (Still resolving 404 error)
    Admin Login: POST /api/admin/login (Encountering issues with login handling)
    Get Assignments for Admin: GET /api/admin/assignments (Fetching assignments needs fixes)


## Snapshots of API testing with Postman 
# api/user/register
![api-user-register](https://github.com/user-attachments/assets/a2c23a94-a6e4-459b-9f43-01dfdd49c336)

# api/user/login
![api-user-login](https://github.com/user-attachments/assets/3340fb3b-f5c8-45eb-ab20-0f082907aa32)

# api/assignment/upload
![api-assignment-upload](https://github.com/user-attachments/assets/3e9cc30e-f4ca-4bbe-951f-66f0398242e6)

# api/admin/register
![api-admin-register](https://github.com/user-attachments/assets/e828ff29-4f65-4a61-ad42-ba5f95ba31bd)

# api/admin/assignments/{id}/accept
![api-admin-asssignment-id-accept](https://github.com/user-attachments/assets/34ed2c77-4fdd-421e-8c61-136e401239f5)

# api/admin/assignments/{id}/reject
![api-admin-assignments-id-reject](https://github.com/user-attachments/assets/e64985a2-dc01-4d86-9981-b2e6ca3c45ad)


## MongoDB data snapshots

![M4](https://github.com/user-attachments/assets/329f7050-cf0c-4a0a-be49-252bdb473113)

![M5](https://github.com/user-attachments/assets/7404c278-b6fa-47d2-8c7e-d2d6e3d6225b)

![M6](https://github.com/user-attachments/assets/fbbd953c-01aa-42aa-a195-b99cefb882cb)






