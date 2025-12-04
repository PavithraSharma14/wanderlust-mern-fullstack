# 🌍 Wanderlust — Full Stack Travel Listing Web Application

⚡**Wanderlust** is a full-stack travel listing web app inspired by Airbnb, built using **Node.js, Express, MongoDB, and EJS.**
It lets users explore, create, and review travel destinations with **full authentication, authorization, and cloud-based image uploads.** ✈️🏕️

<p align="center"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge&logo=ejs&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-8111F9?style=for-the-badge&logo=bootstrap&logoColor=white"/> </p>

---

## 🚀Tech Stack


<table> <tr> <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="48"/><br>Node.js</td> <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="48"/><br>Express.js</td> <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="48"/><br>MongoDB</td> <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48"/><br>JavaScript</td> <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="48"/><br>Bootstrap</td> </tr> <tr> <td align="center"><img src="https://img.icons8.com/fluency/48/cloud.png"/><br>Cloudinary</td> <td align="center"><img src="https://img.icons8.com/fluency/48/map.png"/><br>Mapbox</td> <td align="center"><img src="https://img.icons8.com/color/48/git.png"/><br>Git</td> <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="48"/><br>NPM</td> <td align="center"><img src="https://img.icons8.com/color/48/ejs.png" width="48"/><br>EJS</td> </tr> </table>

---
## 💫 Live Demo <br> 
**Experience the live version here:**<br><br>
[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-green?style=for-the-badge)](https://wanderlust-mern-fullstack.onrender.com)

---

## ⚙️Key Features

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

---

## 📁 Project Structure

```bash
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
```

---

## 🔁 How It Works — Application Workflow<br>

**flowchart TD**
```bash
    A[User Visits Wanderlust 🌍] --> B[Views Listings 🏕️]
    B --> C[Registers / Logs In 🔐]
    C --> D[Creates New Listing ➕]
    D --> E[Uploads Images to Cloudinary ☁️]
    E --> F[Adds Map Location via Mapbox 🗺️]
    F --> G[Submits Form → Joi Validation ✅]
    G --> H[Data Saved to MongoDB 💾]
    H --> I[Success Flash Message ✨]
    I --> J[Other Users Add Reviews 💬]
    J --> K[Owner Edits or Deletes Listing ✏️❌]
    K --> L[Reviews Auto-Deleted by Mongoose Middleware ⚙️]
    L --> M[All Updates Synced on Render 🚀]
```

---

## 🧰 Installation & Setup

**1.Clone the repository**

```bash
git clone https://github.com/PavithraSharma14/wanderlust-mern-fullstack.git
cd wanderlust
```

**2.Install dependencies**

```bash
npm install
```

**3.Environment variables**
Create a .env file in the root with:
```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

**4.Run the app**
```bash
node app.js
or
nodemon app.js
```

**5.Visit the app**
```bash
👉 http://localhost:8080
```

---

## 🚦 Core API Routes

**Listings**<br>
| Method | Route           | Description    |
| ------ | --------------- | -------------- |
| GET    | `/listings`     | All listings   |
| GET    | `/listings/:id` | Single listing |
| POST   | `/listings`     | Create listing |
| PUT    | `/listings/:id` | Edit listing   |
| DELETE | `/listings/:id` | Delete listing |

**Reviews**<br>
| Method | Route                             | Description   |
| ------ | --------------------------------- | ------------- |
| POST   | `/listings/:id/reviews`           | Add review    |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review |

**Users**

- /login
- /signup
- /logout

---

## 🚀 Deployment

Recommended Deployment Stack:
- **Render** → Backend
- **MongoDB Atlas** → Database
- **Cloudinary** → Image Storage

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to **Fork** this repo and submit a **Pull Request**.

### 🔧 How to Contribute

1. **Fork** the repository  
2. **Clone** your fork  
```bash
   git clone https://github.com/your-username/wanderlust.git
```
3. **Create a new branch**
```bash
   git checkout -b feature-name
```
4. **Make your changes**
5. **Commit** your updates
```bash
  git commit -m "Add: your feature name"
```
6. **Push** the branch
```bash
  git push origin feature-name
```
7. Open a **Pull Request** 🚀

---

## 📜 License

- This project is licensed under the **MIT License** — see the LICENSE
  file for details.

---

## 🔗 Connect With Me <br>
<p align="left">
  <a href="https://www.linkedin.com/in/pavithrasharma" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  
  <a href="https://github.com/PavithraSharma14" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>

  <a href="pavithrasharma456@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>

---

<h3 align="center" style="font-size: 24px;">
  <em>Made with ❤️ by <strong> Pavithra Sharma</strong><br><br>
</h3>







