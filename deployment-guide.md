# Deployment Guide — Double J Gulf Services

## 1. Backend Deployment (Render)
[unchanged...]

## 2. Frontend Deployment (Netlify)

1. Push frontend folder to GitHub
2. Go to https://netlify.com and sign in
3. Click "Add New Site" > "Import an existing project"
4. Select your frontend repo
5. In "Build command" enter: `npm run build`
6. In "Publish directory" enter: `dist`
7. Add environment variable:  
   ```
   VITEAPIURL=https://doublej-backend.onrender.com
   ```
8. Click "Deploy Site"
9. After deploy, update your backend's CORS config to allow your Netlify site URL!

---

## 3. MongoDB Atlas Setup
[unchanged...]

## 4. Post-Deployment Checklist
[unchanged...]3. Create a new project
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
