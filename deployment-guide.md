# Deployment Guide — Double J Gulf Services

## 1. Backend Deployment (Render)

1. Push backend folder to GitHub
2. Go to https://render.com
3. Create a new Web Service
4. Select your backend repo
5. Set:
   - Build Command: `npm install`
   - Start Command: `node server.js`
6. Add environment variables:
   - `MONGO_URI=your_atlas_connection_string`
   - `JWT_SECRET=your_secret_key`
7. Deploy

Render will give you a URL like:

https://doublej-backend.onrender.com
(doublej-backend.onrender.com on Bing)


2. Frontend Deployment (Vercel)

1. Push frontend folder to GitHub
2. Go to https://vercel.com
3. Create a new project
4. Select your frontend repo
5. Add environment variable:
`
VITEAPIURL=https://doublej-backend.onrender.com


6. Deploy

---

3. MongoDB Atlas Setup

1. Go to https://cloud.mongodb.com
2. Create a free cluster
3. Add IP whitelist: 0.0.0.0/0
4. Create database user
5. Copy connection string
6. Paste into Render as MONGO_URI

---

4. Post-Deployment Checklist

- Test API endpoints
- Test customer login
- Test admin login
- Submit a test order
- Update order status
- Verify SEO metadata
- Verify sitemap + robots.txt
