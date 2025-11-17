# 🚀 Getting Started Guide - AI Family Memory Keeper

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VS Code recommended)

---

## 🔧 Installation Steps

### 1. Navigate to Project Directory
```bash
cd d:\PROJECTS\mern\mern-project-3\mern-front
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- React 19.1.1
- TypeScript
- Vite 7.1.7
- TailwindCSS 4.1.13
- React Router DOM 7.9.3
- Axios
- SweetAlert2
- And all dev dependencies

### 3. Start Development Server
```bash
npm run dev
```

You should see output like:
```
VITE v7.1.7  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4. Open in Browser
- Open your browser
- Navigate to `http://localhost:5173/`
- You should see the landing page

---

## 🎯 Navigation Guide

### Explore the Application

1. **Landing Page** (`/`)
   - Scroll through the hero section
   - View features
   - Click "Get Started Free" → redirects to `/register`
   - Click "Login" in navbar → redirects to `/login`

2. **Register** (`/register`)
   - Fill in the registration form (dummy data works)
   - Try social signup buttons (UI only)
   - Click "Sign in" link to go to login

3. **Login** (`/login`)
   - Enter email and password (any values work)
   - Try "Remember me" checkbox
   - Try social login buttons (UI only)
   - In real app: would redirect to `/dashboard`

4. **Dashboard** (`/dashboard`)
   - Direct URL: `http://localhost:5173/dashboard`
   - View statistics cards
   - Browse recent memories
   - Check AI stories
   - Click tabs (Overview, Timeline, Albums, Stories)
   - Try "Upload Memories" button → redirects to `/upload`

5. **Upload** (`/upload`)
   - Direct URL: `http://localhost:5173/upload`
   - Drag and drop image files (or click to select)
   - Toggle AI processing options
   - Click "Upload" to see progress animation
   - Browse upload tips

6. **Albums** (`/albums`)
   - Direct URL: `http://localhost:5173/albums`
   - Toggle between Grid and List view
   - Filter: All, AI Generated, Manual
   - Click album cards (UI only)
   - Try "Create Album" button

7. **Stories** (`/stories`)
   - Direct URL: `http://localhost:5173/stories`
   - View featured story
   - Browse story grid
   - Hover over stories to see play button
   - Click "Generate New Story"

8. **Family Groups** (`/family-groups`)
   - Direct URL: `http://localhost:5173/family-groups`
   - View family members
   - Check pending invites
   - Browse shared albums
   - Click "Invite Member" to open modal
   - Try group settings

---

## 📱 Testing Responsive Design

### Desktop View (Default)
- Resize browser to > 1024px
- See full grid layouts
- Desktop navigation visible

### Tablet View
- Resize browser to 640px - 1024px
- Grid changes to 2 columns
- Navigation still visible

### Mobile View
- Resize browser to < 640px
- Single column layouts
- Hamburger menu appears
- Cards stack vertically

**Tip**: Use browser DevTools (F12) → Toggle device toolbar

---

## 🎨 Key Features to Test

### 1. Animations & Hover Effects
- Hover over buttons → scale and shadow effects
- Hover over images → zoom effect
- Hover over cards → shadow changes

### 2. Interactive Elements
- Click filter buttons in Albums page
- Toggle view mode (Grid/List)
- Open and close the invite modal
- Try drag-and-drop in Upload page

### 3. Navigation
- Use navbar to navigate between pages
- Click quick action buttons in dashboard
- Follow links in footer

### 4. Form Inputs
- Type in login/register forms
- Toggle checkboxes
- See focus states on inputs

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

---

## 📁 Project Structure Quick Reference

```
mern-front/
├── src/
│   ├── components/      # Navbar, Footer
│   ├── pages/          # All page components
│   │   ├── auth/       # Login, Register
│   │   └── dashboard/  # Dashboard pages
│   ├── App.tsx         # Root component
│   ├── Controller.tsx  # Routes
│   └── main.tsx        # Entry point
├── public/             # Static assets
└── index.html         # HTML template
```

---

## 🎯 What Works (UI Demonstrations)

✅ All navigation and routing  
✅ Responsive design on all pages  
✅ Animations and transitions  
✅ Form inputs and interactions  
✅ Modal popups  
✅ Grid/List view toggles  
✅ Filter buttons  
✅ Drag-and-drop UI  
✅ Progress bars  
✅ Hover effects  

---

## ❌ What Doesn't Work (Backend Needed)

❌ Actual user authentication  
❌ Real file uploads  
❌ AI processing  
❌ Database storage  
❌ Sending emails  
❌ Creating actual albums  
❌ Video generation  
❌ Family member invites  
❌ Data persistence  

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# Windows PowerShell:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port:
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for errors
npx tsc --noEmit

# Usually auto-fixed by restarting dev server
```

### Tailwind Not Working
```bash
# Ensure TailwindCSS is installed
npm install -D tailwindcss
npm run dev
```

---

## 📚 Documentation Files

Read these for more details:
- **PROJECT_README.md** - Comprehensive documentation
- **UI_GUIDE.md** - Visual design guide
- **PROJECT_SUMMARY.md** - Implementation summary
- **QUICK_REFERENCE.md** - Developer reference
- **FILES_CREATED.md** - Complete file list

---

## 🎓 Learning Resources

### React + TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### TailwindCSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### React Router
- [React Router Documentation](https://reactrouter.com/)

---

## 🔄 Next Steps for Full Development

### Phase 1: Backend Setup
1. Create Express.js server
2. Setup MongoDB database
3. Implement authentication (JWT)
4. Create API endpoints

### Phase 2: Integration
1. Connect frontend to backend
2. Replace mock data with API calls
3. Implement real file uploads
4. Add state management (Redux/Context)

### Phase 3: AI Features
1. Integrate AI vision APIs
2. Implement face detection
3. Add image enhancement
4. Create story generation pipeline

### Phase 4: Advanced Features
1. Real-time updates (WebSockets)
2. Video processing
3. Notifications system
4. Search functionality
5. Export/download features

---

## 💡 Tips for Development

### Hot Reload
- Changes auto-refresh in browser
- Keep dev server running
- Check console for errors

### Browser DevTools
- Use React Developer Tools extension
- Inspect components
- Check network requests
- Test responsive design

### Code Organization
- Keep components small and reusable
- Use TypeScript for type safety
- Follow existing patterns
- Comment complex logic

---

## 🎉 You're Ready!

The application is fully set up and ready to use. Explore all pages, test responsive design, and enjoy the beautiful UI!

### Quick Start Checklist
- [ ] Dependencies installed
- [ ] Dev server running
- [ ] Browser open to localhost:5173
- [ ] Explored landing page
- [ ] Tested navigation
- [ ] Viewed all dashboard pages
- [ ] Tested responsive design
- [ ] Read documentation

---

## 🆘 Need Help?

- Check the documentation files
- Review error messages in terminal
- Check browser console for errors
- Ensure all dependencies are installed
- Restart development server

---

**Happy Developing! 🚀✨**

*Remember: This is a UI demonstration. Backend integration required for full functionality.*
