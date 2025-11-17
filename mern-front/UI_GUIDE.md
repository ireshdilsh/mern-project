# 🎨 AI Family Memory Keeper - UI Design Guide

## 📱 Page Previews & Features

### 🏠 Home/Landing Page (`/`)
**Purpose**: Attract and convert visitors into users

**Sections**:
1. **Hero Section**
   - Large headline: "Preserve Your Family Memories Forever"
   - Purple-pink gradient accent
   - Call-to-action buttons (Get Started Free, Learn More)
   - Hero image with floating stats cards
   
2. **Features Grid** (6 cards)
   - AI-Powered Organization 🤖
   - Smart Albums 📸
   - Auto-Generated Stories ✨
   - Family Groups 👨‍👩‍👧‍👦
   - Image Enhancement 🎨
   - Secure & Private 🔒

3. **How It Works** (3 steps)
   - Upload → AI Analyzes → Enjoy
   - Visual step indicators with numbered badges

4. **Screenshot Showcase**
   - Dashboard preview
   - Albums preview
   - Stories preview

5. **CTA Section**
   - "Start Preserving Your Memories Today"
   - Gradient background

---

### 🔐 Login Page (`/login`)
**Features**:
- Email and password inputs
- "Remember me" checkbox
- "Forgot password?" link
- Social login (Google, Facebook)
- Link to register page
- Gradient logo and branding

---

### ✍️ Register Page (`/register`)
**Fields**:
- Full Name
- Email Address
- Password
- Confirm Password
- Accept Terms checkbox
- Social signup options
- Link to login page

---

### 📊 Dashboard (`/dashboard`)
**Layout**: 
- Header with greeting and "Upload Memories" button
- 4 Statistics Cards:
  - Total Memories (2,847) 📸
  - AI Stories (156) ✨
  - Albums (42) 📁
  - Family Members (8) 👨‍👩‍👧‍👦

**Sections**:
1. **Tab Navigation** (Overview, Timeline, Albums, Stories)
2. **Recent Memories** - Grid of 4 latest photos
3. **AI Stories** - 2 featured AI-generated stories
4. **Quick Actions** - Create Album, Manage Family
5. **Memory Timeline** - Chronological view by month

---

### ⬆️ Upload Page (`/upload`)
**Features**:
- Drag & drop upload area
- Multiple file selection
- File preview grid
- Progress bar during upload
- **AI Processing Options**:
  - ✅ Auto-organize
  - ✅ Face detection
  - ✅ AI descriptions
  - ⬜ Image enhancement

**File Display**:
- Thumbnail preview
- File name and size
- Remove file button
- Upload button with file count

---

### 📁 Albums Page (`/albums`)
**Features**:
- View mode toggle (Grid/List)
- Filter buttons:
  - All Albums
  - AI Generated
  - Manual
- **Album Cards** include:
  - Cover image
  - Title and date
  - Photo/video counts
  - AI badge (if auto-created)

**Example Albums**:
- Summer Vacation 2025 (247 photos, 12 videos)
- Family Birthdays (156 photos, 8 videos)
- Holiday Celebrations
- Kids Growing Up
- Weekend Adventures

---

### 🎬 Stories Page (`/stories`)
**Layout**:
- **Featured Story** (Large hero)
  - Play button overlay
  - Duration badge
  - View/like counts
  
- **Story Grid**:
  - Thumbnail with gradient overlay
  - Title and description
  - Duration, views, likes
  - Photo count

**Stories Examples**:
- November 2025 Highlights (3:42)
- Summer Adventures (5:18)
- Family Birthdays Collection (4:25)

**CTA Section**:
- "Create Your AI Story" with gradient background
- "Generate New Story" button

---

### 👨‍👩‍👧‍👦 Family Groups (`/family-groups`)
**Header Stats** (4 cards):
- Total Members (4)
- Shared Photos (2,847)
- Shared Albums (3)
- Pending Invites (2)

**Sections**:
1. **Family Members List**
   - Avatar, name, email
   - Role badge (Admin/Member)
   - Join date and contribution count
   
2. **Pending Invites**
   - Email address
   - Sent by and date
   - Cancel option

3. **Group Settings**
   - Edit Group Name
   - Privacy Settings
   - Leave Group

4. **Shared Albums Grid**
   - Album covers
   - Owner and member count

**Invite Modal**:
- Email input
- Personal message (optional)
- Send invitation button

---

## 🎨 Design System

### Colors
```
Primary Gradient: from-purple-600 to-pink-500
Backgrounds: white, neutral-50, neutral-900
Text: neutral-900 (dark), white (light)
Accents: blue, green, orange, red
```

### Components
```
Buttons: rounded-full, gradient backgrounds
Cards: rounded-2xl, shadow-sm
Inputs: rounded-lg, focus:ring-2
Modals: backdrop-blur, rounded-2xl
```

### Spacing
```
Container max-width: max-w-7xl
Padding: px-6 py-8/12/20
Gaps: gap-4/6/8
```

### Typography
```
Headings: text-4xl/5xl/6xl, font-bold
Body: text-sm/base/lg, font-normal/medium
Small: text-xs, text-neutral-600
```

---

## 🔗 Navigation Flow

```
/ (Home)
  ├── /login → /dashboard
  ├── /register → /dashboard
  └── Features/About (info pages)

/dashboard
  ├── /upload (from header button)
  ├── /albums (from tab)
  ├── /stories (from tab)
  └── /family-groups (from quick actions)
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column layouts)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: 1024px+ (3-4 columns)

---

## ✨ Interactive Elements

### Hover Effects
- Buttons: `hover:scale-105`, `hover:shadow-lg`
- Cards: `hover:shadow-xl`
- Images: `hover:scale-110` (with overflow-hidden)

### Transitions
- All interactive elements: `transition-all`
- Images: `transition-transform duration-500`

### Gradients
- Primary: `bg-gradient-to-r from-purple-600 to-pink-500`
- Hero background: `bg-gradient-to-br from-purple-50 via-pink-50 to-white`

---

## 🎯 Key User Flows

1. **New User**
   - Land on Home → Register → Dashboard → Upload First Photos

2. **Returning User**
   - Login → Dashboard → View Recent Memories/Stories

3. **Upload Memories**
   - Dashboard → Upload → Select Files → Enable AI Options → Upload

4. **Create Album**
   - Albums → Create Album → Add Photos → Share with Family

5. **Invite Family**
   - Family Groups → Invite Member → Enter Email → Send

---

**Note**: All features are UI demonstrations only. Backend integration required for full functionality.
