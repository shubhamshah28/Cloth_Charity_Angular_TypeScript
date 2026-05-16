# Cloth Charity Angular TypeScript

A full-stack cloth donation and charity management web application built using Angular, TypeScript, Node.js, Express.js, and MongoDB. This platform helps users donate clothes online, track donation requests, and manage charity operations efficiently.

---

## Features

### User Module

* User Registration & Login
* Donate Clothes Online
* Track Donation Status
* Donation History
* Update User Profile

### Admin Module

* Manage Donation Requests
* Accept or Reject Donations
* Assign Volunteers
* Manage Delivery Status

### Contact Module

* User Contact & Support Form

---

## Technologies Used

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## Project Structure

```bash id="x8m4n2"
donation/
│
├── src/                    # Angular Frontend
├── nodeserver/             # Node.js Backend
├── database/               # MongoDB Exported Collections
├── package.json
└── angular.json
```

---

## MongoDB Collections

* user
* donation
* receiver
* volunteer
* contact

---

## Installation

### Frontend Setup

```bash id="g5k2v8"
npm install
ng serve
```

Frontend runs on:

```text id="u3p7m1"
http://localhost:4200
```

---

### Backend Setup

```bash id="c9r4x2"
cd nodeserver
npm install
node myserver1.js
```

---

### MongoDB Setup

1. Install MongoDB Compass
2. Create Database:

```text id="m1q8p5"
clothdb
```

3. Import JSON collections from the `database` folder
4. Update MongoDB connection URL if needed

---

## Future Improvements

* Email Notifications
* Real-time Donation Tracking
* Payment Gateway Integration
* Admin Analytics Dashboard
* Mobile Responsive UI

---

## Author

Shubham Shah

---
