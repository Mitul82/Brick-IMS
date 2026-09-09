# Brick-IMS

> A full-stack inventory and operations management system designed for brick manufacturing businesses to manage production, stock, shipments, requests, and day-to-day operations from a centralized platform.

## Overview

**Brick-IMS** is an Inventory Management System built specifically for **brick mills and brick manufacturing businesses**.

Traditional brick-mill operations often involve managing production records, incoming and outgoing stock, shipment requests, shopkeeper requirements, and operational data across multiple roles. Brick-IMS brings these workflows into a centralized web application with role-based access and dedicated dashboards for different users.

The system provides separate interfaces and permissions for **Owners/Managers, Supervisors, and Shopkeepers**, allowing each role to interact with the parts of the inventory workflow relevant to them.

The application is built as a full-stack JavaScript application using **React, Node.js, Express, and MongoDB**.

---

## ✨ Features

### 🔐 Authentication & Authorization

* Secure user authentication using JWT
* Password hashing with bcrypt
* Role-based access control
* Dedicated workflows for different user roles
* Protected frontend routes and backend APIs

### 📦 Inventory & Stock Management

* Track available brick stock
* Manage produced and received inventory
* Maintain stock movement records
* Monitor issued inventory
* Organize inventory-related operations through dedicated workflows

### 🏭 Production Management

* Record brick production
* Track production quantities
* Maintain production history
* Connect production records with overall stock management

### 🚚 Shipment Management

* Create and manage shipment records
* Track outgoing inventory
* Maintain shipment information
* Provide shipment visibility across relevant roles

### 📋 Requests & Approvals

* Manage inventory-related requests
* Allow operational roles to submit requests
* Provide management-level workflows for handling requests

### 👥 Role-Based Dashboards

Brick-IMS provides dedicated interfaces for:

| Role                | Responsibility                                                         |
| ------------------- | ---------------------------------------------------------------------- |
| **Owner / Manager** | Business-level management, inventory oversight and operational control |
| **Supervisor**      | Production and operational management                                  |
| **Shopkeeper**      | Stock requests, inventory interaction and shop-level operations        |

### 📊 Dashboard & Analytics

* Centralized operational dashboards
* Inventory statistics
* Production-related insights
* Shipment and stock visibility
* Data visualization using charts

### 📄 PDF Generation

The backend includes PDF generation capabilities using **PDFKit**, allowing the application to generate operational documents/reports.

### ☁️ Cloud Media Support

**Cloudinary** is integrated into the backend for handling cloud-based media storage.

### 🛡️ Backend Security

The backend includes several security-oriented features:

* Helmet for HTTP security headers
* Express Rate Limit for API request protection
* JWT-based authentication
* bcrypt password hashing
* CORS configuration
* Environment-based configuration

---

## 🏗️ Architecture

Brick-IMS follows a **client-server architecture** with a React frontend communicating with a REST-style Express backend.

```text
                         ┌──────────────────────┐
                         │      Brick-IMS       │
                         │   Full-Stack Web App │
                         └──────────┬───────────┘
                                    │
                   ┌────────────────┴────────────────┐
                   │                                 │
          ┌────────▼────────┐               ┌────────▼────────┐
          │    Frontend     │               │     Backend     │
          │ React + Vite    │◄─────────────►│ Node + Express  │
          │ Tailwind CSS    │     API       │                 │
          └─────────────────┘               └────────┬────────┘
                                                     │
                                    ┌────────────────┼───────────────┐
                                    │                │               │
                             ┌──────▼──────┐  ┌──────▼──────┐ ┌──────▼──────┐
                             │  MongoDB    │  │ Cloudinary  │ │   PDFKit    │
                             │  Database   │  │   Storage   │ │ PDF Reports │
                             └─────────────┘  └─────────────┘ └─────────────┘
```

---

## 🧰 Tech Stack

### Frontend

* **React 19**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **Axios**
* **Recharts**
* **Lucide React**
* **React Hot Toast**

### Backend

* **Node.js**
* **Express 5**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcryptjs**
* **Helmet**
* **Express Rate Limit**
* **Cloudinary**
* **PDFKit**
* **CORS**
* **dotenv**

---

## 📁 Project Structure

```text
Brick-IMS/
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── authControllers.js
│   │   ├── ownerControllers.js
│   │   ├── shopkeeperController.js
│   │   └── supervisorController.js
│   │
│   ├── database/
│   │
│   ├── helpers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │   ├── issuedModel.js
│   │   ├── productionModel.js
│   │   ├── receivedModel.js
│   │   ├── requestsModels.js
│   │   ├── shipmentsModel.js
│   │   ├── stockModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── ownerRoutes.js
│   │   ├── shopkeeperRoutes.js
│   │   └── supervisorRoutes.js
│   │
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Owner-Manager/
│   │   │   ├── Supervisor/
│   │   │   ├── Shopkeeper/
│   │   │   ├── common/
│   │   │   ├── layouts/
│   │   │   └── middleware/
│   │   │
│   │   └── pages/
│   │       ├── Owner-Manager/
│   │       ├── Supervisor/
│   │       ├── ShopKeeper/
│   │       ├── authPage.jsx
│   │       └── shipmentsPage.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* MongoDB
* npm

You will also need accounts/configuration for any external services used by your deployment, such as Cloudinary.

---

## 1. Clone the Repository

```bash
git clone https://github.com/Mitul82/Brick-IMS.git

cd Brick-IMS
```

---

## 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

FRONTEND_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Add or remove environment variables according to the configuration used by your deployment.

Start the development server:

```bash
npm run dev
```

Or start the production server:

```bash
npm start
```

---

## 3. Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will provide the local frontend URL in the terminal.

---

## 🔑 Environment Variables

Environment variables are used to keep credentials and deployment-specific configuration outside the source code.

### Backend

Typical backend configuration includes:

| Variable                | Description                     |
| ----------------------- | ------------------------------- |
| `PORT`                  | Port used by the Express server |
| `MONGO_URI`             | MongoDB connection string       |
| `JWT_SECRET`            | Secret used to sign JWT tokens  |
| `FRONTEND_URL`          | Frontend origin used for CORS   |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name           |
| `CLOUDINARY_API_KEY`    | Cloudinary API key              |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret           |

**Never commit your `.env` file or production credentials to Git.**

---

## 🔄 Application Workflow

A typical Brick-IMS workflow looks like:

```text
                 ┌──────────────┐
                 │   Login /    │
                 │ Authentication│
                 └──────┬───────┘
                        │
                        ▼
               ┌─────────────────┐
               │ Role Verification│
               └────────┬────────┘
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
     ┌─────────┐   ┌──────────┐  ┌───────────┐
     │ Manager │   │Supervisor│  │ Shopkeeper│
     └────┬────┘   └─────┬────┘  └─────┬─────┘
          │              │             │
          ▼              ▼             ▼
      Business       Production      Requests
      Management     Operations      & Stock
          │              │             │
          └──────────────┼─────────────┘
                         ▼
                  ┌───────────────┐
                  │ Centralized   │
                  │ Inventory Data│
                  └───────────────┘
```

---

## 🗃️ Data Models

The backend currently contains dedicated Mongoose models for the application's core business entities:

* **User**
* **Stock**
* **Production**
* **Received Inventory**
* **Issued Inventory**
* **Requests**
* **Shipments**

This separation allows inventory movements and operational activities to be represented as distinct records rather than being handled as a single monolithic inventory object.

---

## 🔒 Security

Brick-IMS incorporates several measures to improve application security:

* Passwords are hashed using `bcryptjs`
* JWT is used for authentication
* Protected routes restrict access based on authentication and user roles
* Helmet provides security-related HTTP headers
* Express Rate Limit helps protect API endpoints from excessive requests
* Environment variables are used for sensitive configuration
* CORS is configured between the frontend and backend

---

## 📈 Future Improvements

Potential areas for further development include:

* [ ] Advanced inventory forecasting
* [ ] Low-stock and production alerts
* [ ] Automated daily/monthly reports
* [ ] Advanced sales and inventory analytics
* [ ] Export reports to Excel/CSV
* [ ] Audit logs for inventory changes
* [ ] Notification system
* [ ] Multi-branch / multi-mill support
* [ ] Automated backup and recovery
* [ ] Dockerized deployment
* [ ] Automated testing
* [ ] CI/CD pipeline

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "feat: add your feature"
```

4. Push the branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## 📄 License

This project currently uses the **ISC License** for the backend package.

---

## 👨‍💻 Author

**Mitul Srivastava**

GitHub: [@Mitul82](https://github.com/Mitul82)

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

[View the repository →](https://github.com/Mitul82/Brick-IMS)
