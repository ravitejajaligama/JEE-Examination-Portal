
# Online Exam Portal For JEE
The Online Exam Portal is a web-based platform designed to facilitate online examinations for students and teachers. It provides a seamless interface for teachers to create tests, manage questions, and evaluate student performance. Students can register, take exams, and review their results efficiently.

## Features

Features

a) Student Features
1. View test details
2. Register for tests
3. Take the test
4. Check results with correct answers and explanations

b) Teacher Features
1. Create, update, and manage question banks
2. Create and manage tests
3. View the list of tests and results

c) Admin Features

1. Create and manage teacher users
2. Create and manage subjects
3. Oversee and manage the entire platform

## Tech Stack
Frontend

1) React.js – UI development

2) Material-UI – Component styling

3) Redux – State management

4) React Router – Navigation

Backend

1) Node.js & Express.js – API development

2) MongoDB – Database

3) JWT Authentication – Secure login system
## Environment Setup 

To Run my project  :

1. Clone the Repository
Download and install Node.js from the official website:
https://nodejs.org/

2. Environment Variables
To run this project, you'll need to configure the following environment variables in backend/config.json:

mongodb.connectionString: Connection string for MongoDB
jwt.secret: Secret key used for JWT token generation

3. Install Dependencies
Backend:
```bash
  cd backend
  npm install
```
Frontend:
```bash
  cd frontend
  npm install
```
User based Frontend:
```bash
  cd user-portal-frontend
  npm install
```
4. Run MongoDB
Make sure your MongoDB server is running. If you don't have it installed locally, you can use a cloud-based MongoDB service like MongoDB Atlas.

To start MongoDB locally:

bash
Copy
Edit
mongod
5. Start the Backend Server
Now, navigate to the backend folder and run the server:

- cd online-exam-portal/backend
- npm start
This will start your backend API server, and it should be accessible at http://localhost:3000 (by default).

6. Start the Frontend (Admin Portal)
For the admin portal, navigate to the frontend folder and run the following:

- cd online-exam-portal/frontend
- npm start
This will start the admin portal on http://localhost:3001 (by default).

7. Start the Frontend (Teacher/Student Portal)
For the teacher/student portal, navigate to the user-portal-frontend folder and run the following:

- cd online-exam-portal/user-portal-frontend
- npm start
This will start the teacher/student portal on http://localhost:3002 (by default).

8. Default Admin Login
Once you start the backend for the first time, the default admin credentials are created automatically. You can log in using these default credentials:

Username: sysadmin
Password: systemadmin
You can modify these credentials in the addAdminIfNotFound() function located in backend/services/admin.js if needed.

9. Access the Application
Now, you can access your application by visiting the following URLs in your browser:

Admin Portal: http://localhost:3001
Teacher/Student Portal: http://localhost:3002



## Current Status of my project
The project is complete with all the necessary features.





## Authors

- [@ravitejajaligama](https://github.com/ravitejajaligama)

- [@vunnamajay21](https://github.com/vunnamajay21)

- [@Kowsalya-Devi](https://github.com/Kowsalya-Devi)

- [@marupaka-koushik](https://github.com/marupaka-koushik)

- [@sreemanth2909](https://github.com/sreemanth2909)

- [@sonu-2912](https://github.com/sonu-2912)
