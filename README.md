# Student Management System

A **full-stack CRUD application** for managing student details, built with **React.js**, **Spring Boot**, and **MySQL**. This project allows you to **add, view, edit, and delete student records** easily.

---

## ✨ Features

* **Add Students** – Quickly add new student records.
* **View Students** – Display all students with complete details.
* **Edit Student** – Update student information with a user-friendly interface.
* **Delete Student** – Remove students safely from the database.

---

## 🔧 Tech Stack

* **Frontend:** React.js, HTML, CSS, JavaScript
* **Backend:** Spring Boot, Java
* **Database:** MySQL
* **API Communication:** RESTful APIs with JSON

---

## 📁 Project Structure

```
student-management-system/
├── backend/        # Spring Boot backend
│   ├── src/main/java/com/example/student
│   └── application.properties
├── frontend/       # React frontend
│   ├── src/
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Java JDK 17+
* Maven
* Node.js & npm
* MySQL database

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd student-management-system
```

2. **Setup Backend**

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

* Make sure MySQL is running and update credentials in `application.properties`.

3. **Setup Frontend**

```bash
cd frontend
npm install
npm start
```

* The app should now run at `http://localhost:3000`.

---

## 🛠 API Endpoints

* `GET /students` – Fetch all students
* `GET /students/{id}` – Fetch a student by ID
* `POST /students` – Add a new student
* `PUT /students/{id}` – Update student details
* `DELETE /students/{id}` – Delete a student

---

## ✨ Author

**Your Name** – [GitHub Profile](https://github.com/LokeshR007)
