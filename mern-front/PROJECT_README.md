# AI-Powered Family Memory Keeper - Frontend UI

## 🌟 Project Overview

**AI Family Memory Keeper** is a modern, full-stack web application built with the MERN stack that revolutionizes how families preserve, organize, and relive their precious memories. This repository contains the frontend UI implementation with a complete, production-ready design.

### Key Features

✨ **AI-Powered Organization** - Automatically detect events, identify people, and categorize memories  
📸 **Smart Albums** - AI creates beautiful albums based on events, locations, and people  
🎬 **Auto-Generated Stories** - Transform memories into cinematic video stories  
👨‍👩‍👧‍👦 **Family Groups** - Share memories securely with family members  
🎨 **Image Enhancement** - AI-powered photo restoration and quality improvement  
🔒 **Secure & Private** - End-to-end encryption for family data  

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for blazing-fast development
- **TailwindCSS 4** for beautiful, responsive styling
- **React Router DOM** for navigation
- **Axios** for API communication
- **SweetAlert2** for elegant notifications

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
├── components/            # Reusable components
│   ├── Navbar.tsx        # Main navigation bar
│   └── Footer.tsx        # Application footer
├── pages/
│   ├── Home.tsx          # Landing page
│   ├── Landing.tsx       # Alternative landing (Apple-style)
│   ├── auth/
│   │   ├── Login.tsx     # User login
│   │   └── Register.tsx  # User registration
│   └── dashboard/
│       ├── Dashboard.tsx # Main dashboard
│       ├── Upload.tsx    # Media upload interface
│       ├── Albums.tsx    # Album management
│       ├── Stories.tsx   # AI-generated stories
│       └── FamilyGroups.tsx # Family group management
├── styles/               # Additional CSS files
├── App.tsx              # Root component
├── Controller.tsx       # Route management
└── main.tsx            # Application entry point
```

## 🎨 Pages Overview

### 1. **Home/Landing Page** (`/`)
- Hero section with compelling value proposition
- Feature showcase with icons and descriptions
- How it works (3-step process)
- Screenshot showcase
- Call-to-action sections

### 2. **Authentication Pages**
- **Login** (`/login`) - Email/password with social auth options
- **Register** (`/register`) - Full registration form with terms acceptance

### 3. **Dashboard** (`/dashboard`)
- Statistics overview (memories, stories, albums, family members)
- Recent memories grid
- AI stories section
- Timeline view
- Quick actions panel

### 4. **Upload Page** (`/upload`)
- Drag & drop file upload
- Multiple file selection
- AI processing options (auto-organize, face detection, descriptions)
- Upload progress tracking
- File preview and management

### 5. **Albums Page** (`/albums`)
- Grid/List view toggle
- Filter by AI-generated or manual
- Album cards with cover images
- Photo/video counts
- Date information

### 6. **Stories Page** (`/stories`)
- Featured story showcase
- AI-generated video stories grid
- View counts and likes
- Duration badges
- Create story CTA

### 7. **Family Groups** (`/family-groups`)
- Member management
- Invite system with pending invites
- Shared albums
- Group statistics
- Privacy settings

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd mern-front
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple (#9333ea) to Pink (#ec4899)
- **Neutral Grays**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Accent Colors**: Blue, Green, Orange, Red (Tailwind defaults)

### Typography
- **Headings**: Bold, ranging from text-xl to text-6xl
- **Body**: Regular, text-sm to text-xl
- **Font Weight**: Light (300), Medium (500), Semibold (600), Bold (700)

### Components
- **Buttons**: Rounded-full with gradient backgrounds
- **Cards**: Rounded-2xl with subtle shadows
- **Inputs**: Rounded-lg with focus rings
- **Modals**: Backdrop blur with rounded-2xl containers

## 🔗 Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/login` | Login | User authentication |
| `/register` | Register | New user signup |
| `/dashboard` | Dashboard | Main dashboard |
| `/upload` | Upload | Media upload interface |
| `/albums` | Albums | Album management |
| `/stories` | Stories | AI story viewer |
| `/family-groups` | FamilyGroups | Family management |

## 📱 Responsive Design

All pages are fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🎭 Mock Data

The application currently uses mock data for demonstration. Key data structures include:

- **User Profile**: Avatar, name, email, join date
- **Memories**: Images, titles, dates, AI status
- **Albums**: Cover images, photo/video counts, dates
- **Stories**: Thumbnails, duration, view counts, likes
- **Family Members**: Avatars, roles, contribution stats

## 🔮 Future Enhancements

When connecting to backend:
- [ ] Implement real authentication with JWT
- [ ] Connect to AI APIs for image processing
- [ ] Integrate cloud storage (AWS S3/Cloudinary)
- [ ] Add real-time updates with WebSockets
- [ ] Implement video processing pipeline
- [ ] Add search and filter functionality
- [ ] Include notification system
- [ ] Add user preferences and settings

## 📄 License

This project is part of a MERN stack learning initiative.

## 👥 Contributing

This is a UI-only implementation. Backend integration is pending.

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ for families worldwide**

*Note: This is a frontend UI implementation. No backend functionality is currently integrated. All features shown are for design demonstration purposes.*
