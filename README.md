# 🌍 Wanderlust — Full Stack Travel Listing Web Application

⚡Wanderlust is a full-stack travel listing web app inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS.
It lets users explore, create, and review travel destinations with full authentication, authorization, and cloud-based image uploads. ✈️🏕️

🧠 Tech Stack

Backend: Node.js, Express.js <br>
Database: MongoDB (Mongoose ODM)<br>
Templating Engine: EJS<br>
Validation: Joi (Server-Side) & JS (Client-Side)<br>
Authentication: Passport.js<br>
File Uploads: Cloudinary<br>
Maps: Mapbox<br>
Deployment: Render<br>

⚙️ Key Features

| Feature                  | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| 🧾 **CRUD Operations**   | Users can Create, Read, Update, and Delete listings and reviews. |
| 🔐 **Authentication**    | Secure login & signup using Passport.js with encrypted sessions. |
| 🛡️ **Authorization**    | Only owners can modify or delete their listings or reviews.       |
| 💬 **Flash Messages**    | Real-time success and failure feedback with Express-Flash.       |
| 🧮 **Validations**       | Server-side using Joi, client-side with custom JavaScript.       |
| 🧩 **MVC Architecture**  | Clean separation of concerns — models, views, controllers.       |
| ⚙️ **Middlewares**       | Custom, validation, and error-handling middlewares.              |
| ☁️ **Cloud Integration** | Cloudinary for image hosting.                                    |
| 🗺️ **Map Integration**  | Mapbox for interactive location maps.                             |
| 🚀 **Deployment**        | Fully deployed on Render.                                        |

🧩 Folder Structure

Wanderlust/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/
│   └── data.js
├── models/
│   ├── listing.js
│   └── review.js
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── maps.js
│       └── script.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   ├── wrapAsync.js
│   └── middleware.js
├── views/
│   ├── includes/
│   │   └── flash.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── footer.ejs
│   │   ├── navbar.ejs
│   │   ├── index.ejs
│   │   └── show.ejs
│   ├── users/
│   │   ├── login.ejs
│   │   ├── signup.ejs
│   │   └── error.ejs
│   └── error.ejs
├── cloudConfig.js
├── LICENSE
├── middleware.js
├── package-lock.json
├── package.json
├── app.js
├── README.md
└── schema.js



🔁 How It Works — Application Workflow<br>
flowchart TD<br>
    A[User Visits Wanderlust 🌍] --> B[Views Listings 🏕️]<br>
    B --> C[Registers / Logs In 🔐]<br>
    C --> D[Creates New Listing ➕]<br>
    D --> E[Uploads Images to Cloudinary ☁️]<br>
    E --> F[Adds Map Location via Mapbox 🗺️]<br>
    F --> G[Submits Form → Joi Validation ✅]<br>
    G --> H[Data Saved to MongoDB 💾]<br>
    H --> I[Success Flash Message ✨]<br>
    I --> J[Other Users Add Reviews 💬]<br>
    J --> K[Owner Edits or Deletes Listing ✏️❌]<br>
    K --> L[Reviews Auto-Deleted by Mongoose Middleware ⚙️]<br>
    L --> M[All Updates Synced on Render 🚀]


🧰 Installation & Setup

1.Clone the repository

git clone https://github.com/PavithraSharma14/wanderlust.git
cd wanderlust

2.Install dependencies

npm install

3.Environment variables
Create a .env file in the root with:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_connection_string
SECRET=your_session_secret

4.Run the app

node app.js
or
nodemon app.js

5.Visit the app
👉 http://localhost:8080

💡 Middlewares Implemented

🔸 Custom Middleware: Authentication checks & flash messages

🔸 Error Handling Middleware: Centralized error catching

🔸 Mongoose Middleware: Auto-delete reviews on listing deletion

🔸 Validation Middleware: Joi for backend schema validation

🗺️ Deployment

The app is deployed on Render:
👉 https://wanderlust-mern-fullstack.onrender.com

🪪 License

This project is licensed under the MIT License — see the LICENSE
 file for details.

💬 Connect with Me

👩‍💻 Developer: Pavithra Sharma <br>
💼 LinkedIn: www.linkedin.com/in/pavithrasharma <br>
🐙 GitHub: https://github.com/PavithraSharma14 <br>





