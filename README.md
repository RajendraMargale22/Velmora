# 🌍 Velmora – Hotel Booking & Listing Platform

Velmora is a full-stack web application that allows users to explore, list, and review hotels or stays across different locations. It provides authentication, image uploads, maps, and user-generated reviews.

---

## 🚀 Features

- 🏨 Browse hotel listings
- ➕ Add new listings with images
- ✏️ Edit and delete listings (authorized users)
- ⭐ Add and delete reviews
- 🔐 User authentication (Signup/Login/Logout)
- 🗺️ Map integration using Mapbox
- ☁️ Image upload using Cloudinary
- 💬 Flash messages for feedback
- 📱 Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

**Frontend**
- HTML, CSS, JavaScript
- Bootstrap
- EJS (Templating Engine)

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas
- Mongoose

**Other Tools & Libraries**
- Passport.js (Authentication)
- Multer + Cloudinary (Image Upload)
- Mapbox (Location Maps)
- Connect-Flash
- Express-Session

---

## 📁 Project Structure
Velmora/
│
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── controllers/ # Business logic
├── views/ # EJS templates
├── public/ # CSS, JS, images
├── middleware.js # Custom middleware
├── app.js # Main server file
├── cloudConfig.js # Cloudinary config
├── schema.js # Joi validation schemas
└── init/ # Database seeding


---

## ⚙️ Environment Variables

Create a `.env` file in root:

ATLASDB_URL=your_mongodb_connection_string, 
SECRET=your_session_secret, 
CLOUD_NAME=your_cloudinary_name, 
CLOUD_API_KEY=your_cloudinary_key, 
CLOUD_API_SECRET=your_cloudinary_secret, 
MAP_TOKEN=your_mapbox_token


---

## ▶️ Installation & Setup

1. Clone the repository

git clone https://github.com/RajendraMargale22/Velmora.git

cd Velmora


2. Install dependencies

npm install --legacy-peer-deps


3. Run the app

node app.js || nodemon app.js || npm start 


4. Open in browser

http://localhost:8080



---

## 🌐 Deployment

- Hosted on Render
- MongoDB Atlas used for database
- Cloudinary used for image storage

---

## 📌 Future Improvements

- Search & filter functionality
- Booking system
- Payment integration
- User profiles
- Ratings analytics

---

## 👨‍💻 Author

**Rajendra Margale**

---

## 📄 License

This project is for educational purposes.
