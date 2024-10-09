
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


## Test the API with Postman: 
Use Postman to make requests to your endpoints, such as registering users, uploading assignments, and viewing assignments.


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features

- User registration and login
- Admin registration and login
- Upload assignments by users
- View assignments tagged to admins
- Accept or reject assignments
- Input validation and error handling
- Modular and structured code for maintainability

## Installation

Make sure you have the following prerequisites installed on your machine:


    Node.js 
    MongoDB (running locally or hosted)

Once you have these prerequisites, follow the steps under the Run Locally section to get the application up and running
    
## Tech Stack

**Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
**Express**: Fast, unopinionated, minimalist web framework for Node.js.
**MongoDB**: NoSQL database for storing user and assignment data.
**Mongoose**: ODM library for MongoDB and Node.js.   
**Body-parser**: Middleware to parse incoming request bodies.


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

![P2](https://github.com/user-attachments/assets/267ec6c5-4aa1-45c9-9a2a-5e4ab790c76c)

![P3](https://github.com/user-attachments/assets/fa96cc7c-c859-4898-97e6-248a3b2ec6db)

![P8](https://github.com/user-attachments/assets/6174dc35-3c14-4b82-9e81-6bf171b8ef72)

![M1](https://github.com/user-attachments/assets/78a827c9-3f5f-4fe9-8dc8-dce0808b5dba)

![M2](https://github.com/user-attachments/assets/4b262c22-d951-4d40-aa13-e4529d26d5f7)

![M3](https://github.com/user-attachments/assets/12ba2ec9-4504-4031-bf77-6e49ad31c403)




