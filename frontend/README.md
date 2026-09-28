# Inventory Management System

A full-stack Inventory Management System built with **React, Redux Toolkit, Node.js, Express.js, and MongoDB**.

This application helps manage inventory items by allowing users to add, update, delete, search, and filter products while keeping track of stock levels, prices, and low-stock limits.

## Features

* Add new inventory items
* View all inventory items
* Edit inventory items
* Delete inventory items
* Increase and decrease product quantity
* Search products by name
* Filter products by category
* Filter products by stock status
* Automatic stock status:

  * In Stock
  * Low Stock
  * Out of Stock
* Low-stock limit management
* Data stored in MongoDB
* Redux Toolkit for state management
* Responsive dashboard layout

## Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

```text
inventorymanagement-redux/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── ...
│   └── package.json
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── config/
    └── server.js
```

## Installation

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3001
```

### 5. Start Backend

```bash
npm run dev
```

### 6. Start Frontend

```bash
npm run dev
```

## Inventory Fields

Each inventory item contains:

| Field           | Description                 |
| --------------- | --------------------------- |
| `_id`           | MongoDB generated unique ID |
| `name`          | Product name                |
| `category`      | Product category            |
| `stock`         | Available quantity          |
| `price`         | Product price               |
| `lowStockLimit` | Minimum stock limit         |
| `createdAt`     | Product creation date       |
| `updatedAt`     | Last update date            |

## Stock Status Logic

The product status is calculated based on its current stock and low-stock limit.

* **Out of Stock:** Stock is `0`
* **Low Stock:** Stock is equal to or below the low-stock limit
* **In Stock:** Stock is above the low-stock limit

## Redux State Management

Redux Toolkit is used to manage:

* Products
* Loading state
* Error state
* Search value
* Category filter
* Status filter

API operations such as fetching, adding, updating, and deleting products are handled using Redux Toolkit async thunks.

## API Operations

The backend provides APIs for:

* Get all products
* Add a product
* Update a product
* Delete a product
* Update product quantity

## Screenshots

Add screenshots of your application here:

```text
Dashboard
Search & Filters
Add Product
Edit Product
```

## Future Improvements

* User authentication
* Pagination
* Product image upload
* Inventory reports
* Export inventory data
* Admin/user roles

## Author

**Neelam Balodi**

Frontend / MERN Stack Developer
