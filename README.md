Call Insight Project Overview
-----------------------------

### Project Name: CallInsight

### Tagline: Empowering Customer Interactions with AI-Driven Insights

* * * * *

### Overview and Introduction

The Call Insight Project is an innovative solution designed to streamline the analysis and management of business-related communication within organizations. It leverages AI-powered technologies to provide deeper insights into employee call activities, improve performance monitoring, and enhance customer satisfaction tracking, all in real-time.

* * * * *

### Why Are We Making This?

In modern organizations, managing and analyzing employee communication, especially through calls, can be a daunting and inefficient task. Manual tracking of call purposes, outcomes, and quality often leads to errors and inconsistencies. Without an effective system, organizations face several challenges:

-   Tracking Employee Activities:\
    Monitoring each employee's calls, purposes, and context can be time-consuming and error-prone. This lack of visibility often results in inefficiencies and missed opportunities for improvement.

-   Customer Satisfaction Monitoring:\
    Understanding customer satisfaction levels during calls is crucial for maintaining strong client relationships. Manually evaluating this is not scalable for larger teams.

-   Call Remarks Management:\
    Recording call remarks such as the reason for the call, customer responses, and follow-up actions are often inconsistent, leading to incomplete data.

-   Performance Assessment:\
    Evaluating employee performance based on call data is difficult without structured information. Without a system, identifying areas for improvement is more guesswork than analysis.

-   Detecting Fake Calls:\
    Identifying fake calls used to inflate performance metrics is near impossible without a comprehensive monitoring system.

-   Sentiment and Context Analysis:\
    Traditional methods fail to capture and analyze customer sentiments or the context behind calls. Our AI-powered solution automatically extracts these insights, offering a richer understanding.

-   Streamlining Managerial Oversight:\
    Managers need real-time data and actionable insights into employee communication activities to supervise large teams effectively. Without this, oversight becomes challenging.

* * * * *

### Addressing These Challenges

To solve these issues, CallInsight has been developed with the following key features:

1.  Detailed Tracking and Insights:\
    Track every employee's call activity with ease, providing full transparency into employee communication.

2.  AI-Powered Sentiment and Satisfaction Analysis:\
    Automatically analyze customer sentiments during calls, giving real-time insights into customer satisfaction levels.

3.  Efficient Call Remarks Management:\
    Automatically log and store remarks for each call in an organized manner, making data easily retrievable for future reference.

4.  Performance Assessment and Improvement:\
    Use structured call data to assess employee performance, identify potential areas for improvement, and make informed decisions about coaching or training.

5.  Fake Call Detection:\
    Leverage AI to detect anomalies such as fake calls, ensuring integrity in performance metrics.

6.  Centralized Platform:\
    Provide a unified platform for employees, managers, and admins to interact with data seamlessly, ensuring ease of use across roles.

* * * * *

### System Phases

The Call Insight project consists of three integrated phases that contribute to its overall functionality and effectiveness:

#### Phase 1: Mobile Application

The first phase introduces a user-friendly mobile application for employees to log in using their Employee ID (EID). The app records essential metadata such as timestamps, durations, and call details. These recordings are uploaded to a centralized database, ensuring automated and accurate data collection. This phase removes manual data entry, improving efficiency and accuracy.

-   Key Features:

-   Employee login with EID for a personalized experience.

-   Automatic call recording with relevant metadata.

-   Data uploaded to a centralized system for real-time processing.

#### Phase 2: Web Dashboard

The second phase introduces a robust web dashboard for employees, managers, and admins, each with specific roles and functionalities:

-   Employee Role:\
    Employees can view and analyze their own communication data, including call records filtered by parameters like date, type, and more.

-   Manager Role:\
    Managers have access to the communication data of their team, allowing them to monitor productivity, assess performance, and track workload distribution.

-   Admin Role:\
    Admins oversee the entire system, managing user registrations, role assignments, and account maintenance. They ensure the system remains secure and up-to-date.

-   Key Features:

-   Role-based access to data with granular permissions.

-   Comprehensive reporting and performance analytics for managers.

-   User management and role assignment for admins.

#### Phase 3: AI-Powered Analysis

The final phase integrates an AI-driven analysis system that processes the collected data to generate actionable insights.

-   Data Processing:\
    Call data, including audio recordings, is analyzed using AI models to derive insights such as sentiment analysis, keyword detection, and performance metrics.

-   Database Storage:\
    The processed data is securely stored in a database, ensuring efficient retrieval and management for further use.

-   Integration with Web Dashboard:\
    The processed data is fetched by the web dashboard, where it is visualized in graphs, tables, and analytics dashboards. This allows users to interpret the data and make informed decisions.

-   Key Features:

-   AI-driven insights including sentiment analysis, keyword detection, and performance metrics.

-   Secure and efficient database storage.

-   Integration with the web dashboard for data visualization.

How to Set Up the Call Insight Project
--------------------------------------

Follow the steps below to set up both the frontend and backend systems for the Call Insight project:

* * * * *

### Prerequisites

Ensure you have the following installed on your system:

-   Node.js (Recommended version: 16 or higher)

-   npm (comes bundled with Node.js)

-   Any IDE or code editor (e.g., Visual Studio Code)

* * * * *

### Step 1: Setting Up the Frontend

#### Navigate to the Frontend Directory:

Open your terminal and change the directory to the frontend folder:

```
cd path/to/frontend
```

#### Add the .env File:

Create and place a .env file in the root of the frontend directory. This file will contain essential environment variables required for the frontend to function properly (e.g., API endpoints, third-party service keys, etc.).

#### Install Dependencies:

Run the following command to install all the necessary packages defined in the package.json file:

```
npm install
```

This will download and set up all required dependencies for the frontend.

* * * * *

### Step 2: Setting Up the Backend

#### Navigate to the Backend Directory:

In your terminal, change the directory to the backend folder:

```
cd path/to/backend
```

#### Add the .env File:

Similarly, place a .env file in the root of the backend directory. This file will contain critical configuration details such as database credentials, server settings, and API keys.

#### Install Dependencies:

Run the following command to install the necessary backend dependencies:

```
npm install
```

This will set up the required packages for the backend as per the package.json file.

* * * * *

### Step 3: Starting the Servers

#### Start the Backend Server:

In the backend directory, use the following command to start the backend server:

```
npm run start
```

You should see a message indicating that the backend server is running successfully.

#### Start the Frontend Server:

After the backend server is running, open a new terminal window, navigate to the frontend directory, and run:

```
npm run dev
```

This will start the frontend server in development mode, typically accessible at[  http://localhost:3000](http://localhost:3000) by default.

* * * * *

### Additional Notes

-   Ensure both frontend and backend servers are running simultaneously for the project to function correctly.

-   If you encounter issues, check the console logs for error messages, and ensure all environment variables in the .env files are correctly configured.

-   The frontend and backend ports can be customized in their respective .env files, but they must match the configuration defined in the project for seamless communication.
   * * * * *
   ### Demo Test IDs

To assist with the demonstration of features across different roles, the following test IDs are provided:

1.  Employee Test ID:

-   EID:  EID05358

-   Password:  ezK0zyAM

-   Access:

-   Dashboard: View personal performance and call data.

-   Call Logs: Access own call records.

-   Call Analysis: Sentiment analysis and call summaries for personal calls.

-   Leaderboard: View personal ranking and points.

3.  Manager Test ID:

-   EID: EID23672

-   Password: aVp1RJqz

-   Access:

-   Dashboard: View performance data for self and managed employees.

-   Call Logs: Access call logs of employees under their management.

-   Call Analysis: Sentiment analysis, satisfaction scores, and call summaries for managed employees.

-   Leaderboard: View team performance rankings.

5.  Admin Test ID:

-   EID: EID12345

-   Password: dhruv

-   Access:

-   User Management: Create, update, and delete employee accounts and roles. Admins can only access this route.

Technology Stack for Call Insight Project
-----------------------------------------

### Phase 1: Mobile Application

-   Flutter & Dart:

-   Used to develop a cross-platform mobile application, ensuring a seamless user interface (UI) and optimized performance on both iOS and Android devices.

-   Kotlin:

-   Used for Android-specific tasks, including native call recording, API integrations, and handling platform-specific functionalities.

-   Java:

-   Handles core functionality for the mobile application, managing background services, system-level tasks like call management, and supporting native features not covered by Kotlin or Flutter.

* * * * *

### Phase 2: Web Dashboard

#### Frontend:

-   React.js:

-   Powers the dynamic, interactive, and responsive user interface of the web dashboard, offering a smooth and intuitive user experience.

-   HTML5 & CSS3:

-   Used for structuring and styling the dashboard, ensuring it is clean, well-organized, and visually appealing.

-   ChadCN:

-   A library for building accessible and customizable UI components, enhancing the overall user interface's flexibility.

#### Backend:

-   Node.js & Express.js:

-   Handles server-side logic and creates efficient RESTful APIs to facilitate communication between the frontend and backend.

-   JWT (JSON Web Tokens):

-   Implements secure user authentication and role-based access control (employee, manager, admin), ensuring only authorized users can access specific resources or perform certain actions.

-   dotenv:

-   Manages environment variables (e.g., API keys and sensitive configurations), keeping them secure and easy to configure across different environments.

-   MongoDB:

-   A NoSQL database used to store AI-processed data, such as call summaries, sentiment analysis results, and satisfaction scores. Its flexible schema allows for efficient handling of large datasets.

-   Mongoose:

-   A MongoDB Object Data Modeling (ODM) library that simplifies data modeling and interactions with MongoDB, making database queries more manageable.

#### Database:

-   Firebase:

-   Manages user login details, storing information like employee roles (employee, manager, admin) and ensuring secure authentication.

-   MongoDB:

-   Stores the AI-processed data, including call summaries and sentiment analysis results, providing the backend with structured storage for large datasets.

* * * * *

### Phase 3: AI and Analytics

-   BART Model:

-   A powerful NLP model used to summarize call recordings into concise, actionable insights, helping extract meaningful data from call transcripts.

-   BERT Model:

-   Performs sentiment analysis on calls, categorizing them as positive, negative, or neutral to evaluate customer satisfaction.

-   Satisfaction Scoring:

-   Leverages keyword detection and weighted sentiment analysis to calculate a satisfaction score, reflecting customer sentiments accurately.

-   Multilingual Support:

-   Uses translation APIs to process calls in multiple languages, converting them to English for standardized analysis.

-   Audio Modelling:

-   Implements voice thresholding to assess emotions and behavior based on the employee's voice during calls, adding an extra layer to performance evaluation.

* * * * *

### Why This Stack?

-   Mobile Application:

-   Flutter provides a cross-platform solution with optimized performance, while Kotlin delivers native Android functionality for tasks like call recording and API interactions. Java supports core functionality and background services, enabling robust management of native features.

-   Web Dashboard:

-   The MERN stack (MongoDB, Express.js, React.js, Node.js) is chosen for its scalability, fast development cycle, and ability to deliver an intuitive user experience. It allows for smooth communication between the frontend and backend while efficiently managing large datasets.

-   AI Models:

-   BART and BERT are advanced NLP models that provide powerful analytics, offering meaningful insights from call recordings. The multilingual support and audio modelling enhance the evaluation of employee performance and make the system more inclusive.

-   Databases:

-   Firebase offers secure authentication and real-time updates, while MongoDB is ideal for handling large, AI-processed datasets efficiently.

This combination of technologies ensures a powerful, secure, and scalable system, addressing key organizational challenges such as:

-   Tracking employee performance

-   Analyzing customer sentiments

-   Detecting fraudulent activity

The Call Insight project aims to transform communication management within organizations, enabling efficient oversight and actionable insights.

Web Dashboard Overview
----------------------

The web application is designed to manage and analyze employee call data, offering tailored functionalities based on user roles: employees, managers, and admins. The platform's user interface and features are structured to provide varying levels of access, empowering each user role to efficiently track performance, analyze calls, and manage user information.

### 1\. Login Page

-   Authentication: Upon visiting the website, users are prompted to log in using their Employee ID (EID). This serves as the primary method of authentication.

-   Role-based Access: Once logged in, the role (employee, manager, admin) determines the level of access to different sections of the website.

### 2\. Dashboard

The Dashboard serves as the primary landing page after login. It is accessible to employees, managers, and admins, with the content tailored to the role.

-   Employee View:

-   Displays personal performance metrics, call logs, sentiment analysis, and satisfaction scores.

-   Manager View:

-   Managers have access to data from multiple employees, allowing them to monitor team performance and track sentiment trends.

-   Features:

-   Login/Logout: The option to log in or log out appears in the top-right corner.

-   CSV Download: Employees and managers can download their data in CSV format for offline analysis.

-   Dark/Light Mode Toggle: Users can toggle between dark and light themes based on personal preference.

-   Employee Details: Managers can view detailed information of employees, while employees can only see their own details.

### 3\. Call Logs

The Call Logs page provides detailed insights into all call data, with advanced filters to make navigation efficient. This page is available to employees, managers, and admins.

-   Filters: Users can filter calls by:

-   Date, Employee ID, Region, Call Status (incoming, outgoing, missed), Department, and more.

-   Details: For each call, the following data is available:

-   Call ID: Unique identifier for each call.

-   Employee ID: ID of the employee handling the call.

-   Customer Phone Number: Number involved in the call.

-   Department: Department associated with the call.

-   Region: Geographical region related to the call.

-   Call Status: Indicates if the call was incoming, outgoing, or missed.

-   Timestamp: The exact time of the call.

-   Recording: A link to the recorded call.

-   Duration: The length of the call.

This page allows detailed tracking and analysis of call data, helping both employees and managers evaluate performance.

### 4\. Call Analysis

The Call Analysis page offers detailed insights into customer satisfaction and sentiment analysis.

-   Features:

-   Call ID & Employee ID: Unique identifiers for each call and employee.

-   Sentiment Analysis: Analyzes the call's sentiment (positive, negative, or neutral) to gauge customer satisfaction.

-   Satisfaction Score: A score calculated from sentiment analysis and keyword detection, reflecting the customer's satisfaction.

-   Call Summary: A brief summary of the call, highlighting key points such as customer queries, employee responses, and issue resolutions.

This page helps employees and managers assess the quality of calls and understand customer perceptions.

### 5\. Leaderboard

The Leaderboard page is a part of the Gamification feature and is accessible to all users. It ranks employees based on performance, encouraging better performance through friendly competition.

-   Features:

-   Ranking: Employees are ranked according to their satisfaction scores and performance metrics.

-   Points: Employees earn points based on criteria such as call quality, sentiment analysis, and customer satisfaction.

-   Position: Employees can see their position on the leaderboard, motivating them to improve their performance.

### 6\. User Management (Admin Only)

The User Management page is exclusively for admins, providing full control over user accounts and roles.

-   Features:

-   Create New Users: Admins can add new employees or managers and assign roles.

-   Delete Users: Admins can remove users from the system.

-   Update Employee Roles: Admins can promote or demote employees to/from manager roles.

-   Modify User Information: Admins can update personal details, including EID and role.

Note: Admins do not have access to regular routes (like Dashboard, Call Logs, etc.) available to employees and managers. They only access the User Management page.

* * * * *

### Role-based Access Control (RBAC)

-   Employee:

-   Limited to their own data. Employees can view their call logs, analysis, satisfaction scores, and leaderboard rankings.

-   Accessible pages: Dashboard, Call Logs, Call Analysis, Leaderboard.

-   Manager:

-   Can manage and view data from multiple employees.

-   Accessible pages: Dashboard, Call Logs, Call Analysis, Leaderboard, Employee details.

-   Admin:

-   Has full control over user management, with no access to regular user routes (Dashboard, Call Logs, etc.).

-   Accessible pages: User Management.

### Navigation

-   Left Pane Navigation: All routes (Dashboard, Call Logs, Call Analysis, Leaderboard, User Management) are accessible from the left-side navigation pane, ensuring users can quickly and easily navigate between sections of the website.

This web dashboard provides a robust platform for managing and analyzing employee call data. The role-based access control ensures that users only access data relevant to their responsibilities, while features like CSV downloads, dark/light mode toggle, and leaderboards improve user experience and engagement. The User Management page allows admins to control and update user roles, ensuring smooth operation and access management.

### Conclusion

The web dashboard effectively addresses the challenges organizations face in managing and analyzing employee call data. With a focus on role-based access control (RBAC), the platform tailors the experience for employees, managers, and admins, offering personalized insights and tools to improve productivity and customer satisfaction. By incorporating features like sentiment analysis, gamification through the leaderboard, and detailed call logs, the dashboard empowers managers to track performance and guide their teams effectively. The system fosters a competitive environment while ensuring that employees have access to the tools they need to grow and improve.

### Problem Solved

The platform addresses key challenges faced by organizations that manage customer-facing teams:

-   Employee Performance Tracking: Monitor performance based on call interactions and customer feedback.

-   Customer Sentiment Analysis: Using AI models, the system analyzes customer emotions and satisfaction, helping improve service.

-   Data Integrity & Fraud Prevention: Accurate call logs and real-time sentiment analysis ensure that the data remains authentic and reliable.

-   Manager Support: Provides managers with the tools needed to guide employees, improve performance, and drive team success.

### Future Enhancements

-   Advanced Analytics: Incorporating machine learning models to predict employee performance trends, customer satisfaction, and behavior patterns.

-   CRM Integration: Syncing with CRM platforms to enhance the customer interaction view.

-   Multilingual Support: Improved speech-to-text models to cater to multilingual customers and enhance communication accuracy.

-   Mobile Integration: Expanding the web-based tools to mobile platforms, enabling on-the-go access for both employees and managers.

### Real-World Use Case

This system is ideal for organizations that rely on call centers or other customer-facing roles. By tracking and analyzing calls, businesses can:

-   Improve employee performance with data-driven insights.

-   Make informed decisions on employee rewards, training needs, and performance management.

-   Scale the system as the business grows, incorporating more features and handling larger datasets.

### Scalability

The system is designed to be scalable in both horizontal and vertical directions:

-   Horizontal Scaling: Distribute load across multiple servers or cloud instances to handle more users.

-   Vertical Scaling: Integrate additional features, AI models, and support larger data volumes as the business expands.

This dashboard provides a comprehensive solution for managing customer-facing employees, driving performance through data insights, and creating a culture of continuous improvement.
