#  YouTube Clone (MERN Stack)

A full-stack YouTube clone application built using **MongoDB, Express, React, and Node.js (MERN)**. This project simulates a simplified version of YouTube, allowing users to create channels, upload videos, interact via likes, dislikes, and comments.

---

##  Features
- User authentication with **JWT**
- Secure route protection (login required for actions like like/dislike/comment)
- User profile with avatar
- Create and manage **Channels**
- Upload and manage **Videos**
- Like / Unlike / Dislike / Remove Dislike on Videos
- Comment / Edit / Delete Comments on Videos
- View Channels and Channel-specific videos
- Dynamic Video Player Page with recommended videos
- Responsive Frontend with React and `react-router`
- Clean UI, React Context for authentication
- MongoDB database models for Users, Channels, Videos, and Comments

---

##  Tech Stack
**Frontend:**  
- React  
- React Router  
- Axios  
- Date-fns  
- React Icons  

**Backend:**  
- Node.js  
- Express  
- MongoDB with Mongoose  
- JWT (jsonwebtoken)  
- bcrypt (for password hashing)  
- dotenv  

---

##  Project Structure

/backend
    /controller
    /model
    /routes
    /middleware
    .env
    server.js
    seed.js

/frontend
    /src
        /components
        /contexts
        /pages
        /assets
        /css
        App.jsx
        main.jsx



---

## ⚙️ Setup Instructions

### 1 Backend Setup
```bash
cd backend
npm install
```

Create an .env file 
```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1d
PORT=5100
```

### 2 Frontend Setup
```bash
cd frontend
npm install
```

### Run Frontend
```bash
npm run dev
```

## Seeding dummy vidoes
```bash
cd backend
node seed.js
```

##  Usage
- **Register / Login**
- **Create your Channel**
- **Upload videos via API or seed script**
- **Interact with videos (like, dislike, comment)**
- **Browse channels and videos**
- **Watch videos with a dynamic iframe-based player for YouTube links**
- **Manage your profile, channel, and content.**

---

##  Purpose
This project was built to practice:
- Full-stack **MERN** development
- **RESTful API** design
- **JWT-based authentication** and route protection
- Working with relationships in **MongoDB** (User ↔ Channel ↔ Video)
- React state management using **Context API**
- Realistic **CRUD operations** for content-based apps

---

##  Future Improvements (Optional Ideas)
- Video upload from local files to storage (**Cloudinary / AWS S3**)
- Advanced **search & filter**
- **Subscriptions**, **Notifications**, and **History**
- Real **video streaming** service

---

##  License
This project is for **educational purposes only.**  
Do not use it as a commercial clone of YouTube.

