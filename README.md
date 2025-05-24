

# Book World

A full-featured book review and management application built with the MERN stack (`MongoDB`, `Express`, `React`, `Node.js`). Users can browse books, leave reviews with star ratings, and manage their favorites. Admins have extended capabilities for adding, editing, and deleting books, as well as managing user data and access.

Live Link: https://book-new-client.vercel.app/books

## Features

- **User Authentication:**

  - Secure user registration and login system.
  - JWT for authorization.
  - Bcrypt for password hashing.

- **Book Listing with Reviews & Ratings:**

  - Browse and search for books.
  - Leave comprehensive reviews with star ratings.
  - Read and gain insights from community reviews.

- **User Profile Pages:**

  - Personalized profiles to track activity.
  - Manage and curate a list of favorite books.


- **User Roles & Permissions:**
  - Differentiation between user and admin roles.
  - Admin capabilities to add, update, and delete book listings.
  - Manage user data and user roles (excluding a master admin).

## Technologies Used

- **Frontend:**

  - React.js
  - Recoil for State Management
  - Tailwind CSS
  - Shadcn UI library
  - React Hook Form
  - Tanstack Tables
  - Lucide-React for icons

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB
  - Mongoose for MongoDB object modeling
  - Multer for handling `multipart/form-data`
  - CORS for Cross-Origin Resource Sharing
  - JWT for token-based authentication
  - Bcrypt for secure password storage

- **Other Dependencies:**
  - Axios
  - Zod for schema validation
  - React Router DOM for routing
  - Cloudinary for image uploads (optional)

## Installation Guide

### Requirements

- Node.js
- MongoDB

You can use use Mongo Atlas URL instead of local MongoDB

### Configure Environment Variables

 Make .env file with this all things

Add your `backend_uri`

### Installation

#### Clone the Repository

```shell
git clone https://github.com/sinnilay/book_new_client.git

```

#### Install packages

```shell

npm install




#### Start Backend



```shell
npm run dev


Now open `localhost:5173` on your browser for bakend running .



