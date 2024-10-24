### GitHub Description

Complaint Management System is a full-stack web application designed to streamline the process of managing user complaints. The frontend is built with React (using Material UI), and the backend is powered by Java Spring Boot, with the two connected via Axios. The backend runs on port 8080 and the frontend on port 3000. Users can submit complaints, and administrators can view and respond to them. When responding to complaints, an email is automatically sent to the complainant, with options to customize the subject and body of the email.

The system includes a special key ('ooad') that grants access to view all past complaints.

### Key Features:
- **Frontend**: React with Material UI, running on port 3000.
- **Backend**: Java Spring Boot, running on port 8080.
- **Axios**: Used for seamless communication between frontend and backend.
- **Database**: MySQL database named 'complaint'.
- **Email Integration**: Automatic email notifications when responding to complaints. SMTP email setup via the `application.properties` file.
- **Admin Key**: Special secret key ('ooad') to view all past complaints.

### Prerequisites:
- React and npm installed.
- Node.js installed.
- XAMPP installed for MySQL database management.
- A MySQL database named 'complaint'.

### Setup Instructions:
1. Clone the repository to your local machine.
2. Make sure you have **npm**, **React**, and **XAMPP** installed.
3. Create a database called `complaint` in your MySQL database.
4. Update the `application.properties` file in the Spring Boot backend:
   ```properties
   spring.mail.host=smtp.gmail.com
   spring.mail.port=587
   spring.mail.username=your-email@gmail.com
   spring.mail.password=your-app-password
   ```
   - If you're using Gmail:
     - **spring.mail.host**: Set to `smtp.gmail.com`.
     - **spring.mail.port**: Set to `587`.
     - **spring.mail.username**: Your Gmail address.
     - **spring.mail.password**: Generate an app password from your Google Account (under Security > App Passwords).
   
5. Start the React frontend by navigating to the frontend directory and running:
   ```bash
   npm start
   ```

6. Start the Spring Boot backend by navigating to the backend directory and running:
   ```bash
   mvn spring-boot:run
   ```

7. Once both the frontend and backend are running, the frontend will be accessible at `http://localhost:3000`, and the backend at `http://localhost:8080`.

8. Use the key 'ooad' to view all past complaints in the admin panel.

Feel free to contribute to this project by raising issues or submitting pull requests.
