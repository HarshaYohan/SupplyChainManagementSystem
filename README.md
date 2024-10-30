# 📦 Supply Chain Management System

## 📖 Project Overview
The **Supply Chain Management System** is designed for **Company A**, a production company based in Kandy. The system supports logistics management, coordinating the distribution of products across Sri Lanka through an integrated railway and truck delivery network. With automated scheduling for drivers and detailed reporting, the system enhances efficiency and decision-making for the company’s operations.

## 🚀 Project Description

Company A manages orders from wholesalers, retailers, and end customers across various regions. Key components of the system include:

- **Railway-Based Distribution**: Orders are transported from the factory to storage facilities located in major cities (Colombo, Negombo, Galle, Matara, Jaffna, Trinco) via an allocated railway capacity. If order volumes exceed the allocated train capacity, the system reschedules the excess orders for the next available trip.

- **Truck-Based Final Mile Delivery**: From each city’s storage facility, orders are distributed to customer locations via trucks following predefined routes. These routes ensure full coverage of each city’s area, with delivery times predefined for each route.

- **Driver and Assistant Scheduling**: Each truck is assigned a driver and assistant, scheduled according to the following rules:
  - **Drivers**: Cannot be scheduled for consecutive shifts; maximum work hours capped at 40 hours/week.
  - **Assistants**: Can be scheduled for up to two consecutive shifts; maximum work hours capped at 60 hours/week.
  - Rosters are auto-generated based on these constraints to ensure fair workload distribution.

- **Customer Order Placement**: Customers must place orders at least 7 days in advance. Orders can be scheduled along specific routes, allowing customers to select the route nearest to their delivery location.

- **Comprehensive Reporting**: The system includes reports for management insights, including:
  - **Quarterly Sales Reports** for a specified year.
  - **Most Ordered Items** to identify popular products.
  - **Sales by City and Route** to highlight geographic and route-specific performance.
  - **Work Hours Reports** for drivers, assistants, and truck usage.
  - **Customer Order Summaries** for tracking orders and customer activity.

## 📋 Features

- **Integrated Logistics Management**: Combines railway and truck logistics with real-time scheduling.
- **Automated Scheduling**: Assigns drivers and assistants based on roster constraints.
- **Order Management**: Facilitates route-based order scheduling and delivery tracking.
- **Detailed Reporting System**: Provides analytical reports for sales, workforce management, and vehicle usage.

## 🛠️ Getting Started

### Prerequisites

Ensure the following tools are installed:
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- A compatible database (e.g., MySQL or PostgreSQL)

### Installation & Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**  
   Clone the project to your local machine:
   ```bash
   git clone https://github.com/YourUsername/Supply-Chain-Management-System.git
   cd Supply-Chain-Management-System

Database Setup
Import the .sql file included in the repository to initialize the database tables and data. Use this command:

sql
Copy code
mysql -u username -p database_name < path_to_sql_file.sql
Environment Variables
Create a .env file in the project root and define the necessary environment variables. These include database credentials, API keys, and other configurations.

Install Dependencies
Run the following command in your terminal to install required dependencies:

bash
Copy code
npm install
Start the Application

To start in production mode:
bash
Copy code
npm start
To run in development mode:
bash
Copy code
npm run dev
📂 Project Structure
src/: Contains the main application code.
routes/: Defines API routes for modules such as orders, logistics, and reporting.
models/: Database models for entities like Orders, Drivers, and Trucks.
controllers/: Business logic for handling different functionalities.
views/: UI components for interacting with the system.
📊 Usage
Once running, the platform can be accessed via the specified local host or deployment server. Employees of Company A can manage orders, schedules, and generate reports from the system dashboard.

🖊️ Contributing
Contributions are welcome! To suggest changes, please open an issue or submit a pull request.

📜 License
This project is licensed under the MIT License. For details, see the LICENSE file.

👤 Author
Developed by [Your Name]. For inquiries, reach out via email or GitHub.
