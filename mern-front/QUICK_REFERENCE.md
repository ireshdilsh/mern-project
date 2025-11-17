# 🚀 Quick Developer Reference

## Navigation Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/login` | Login | User authentication |
| `/register` | Register | New user signup |
| `/dashboard` | Dashboard | Main dashboard |
| `/upload` | Upload | Media upload |
| `/albums` | Albums | Album management |
| `/stories` | Stories | AI stories |
| `/family-groups` | FamilyGroups | Family management |

## Component Imports

```tsx
// Navigation
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Auth Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

// Dashboard Pages  
import Dashboard from './pages/dashboard/Dashboard'
import Upload from './pages/dashboard/Upload'
import Albums from './pages/dashboard/Albums'
import Stories from './pages/dashboard/Stories'
import FamilyGroups from './pages/dashboard/FamilyGroups'
```

## Common TailwindCSS Classes

### Buttons
```tsx
// Primary Button
className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-medium'

// Secondary Button  
className='border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-all font-medium'
```

### Cards
```tsx
// Standard Card
className='bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-6'

// Stat Card
className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'
```

### Inputs
```tsx
// Text Input
className='w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none'
```

### Containers
```tsx
// Main Container
className='max-w-7xl mx-auto px-6 py-8'

// Section
className='py-20 px-6 bg-neutral-50'
```

## Color Palette

```css
/* Primary Gradient */
from-purple-600 to-pink-500

/* Backgrounds */
bg-white
bg-neutral-50
bg-neutral-900

/* Text */
text-neutral-900 (dark)
text-neutral-600 (medium)
text-neutral-500 (light)

/* Accents */
bg-purple-100 text-purple-600
bg-blue-100 text-blue-600
bg-green-100 text-green-600
bg-orange-100 text-orange-600
```

## Icon SVGs

### Upload Icon
```tsx
<svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
</svg>
```

### Photos Icon
```tsx
<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
</svg>
```

### People Icon
```tsx
<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
</svg>
```

## Mock Data Examples

### User Stats
```ts
const stats = [
  { label: 'Total Memories', value: '2,847', icon: '📸' },
  { label: 'AI Stories', value: '156', icon: '✨' },
  { label: 'Albums', value: '42', icon: '📁' },
  { label: 'Family Members', value: '8', icon: '👨‍👩‍👧‍👦' },
]
```

### Memory Object
```ts
const memory = {
  id: 1,
  image: 'url',
  title: 'Beach Vacation',
  date: '2 days ago',
  ai: true
}
```

### Album Object
```ts
const album = {
  id: 1,
  title: 'Summer 2025',
  coverImage: 'url',
  photosCount: 247,
  videosCount: 12,
  date: 'June - August 2025',
  aiGenerated: true
}
```

## TypeScript Types

```ts
// Form Data
interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

interface RegisterFormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

// Memory
interface Memory {
  id: number
  image: string
  title: string
  date: string
  ai: boolean
}

// Album
interface Album {
  id: number
  title: string
  coverImage: string
  photosCount: number
  videosCount: number
  date: string
  aiGenerated: boolean
}
```

## Responsive Breakpoints

```tsx
// Mobile First
className='flex flex-col md:flex-row'

// Hide on mobile
className='hidden md:block'

// Show only on mobile
className='block md:hidden'

// Grid responsive
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
```

## Animation Classes

```tsx
// Hover scale
className='transform hover:scale-105 transition-all'

// Hover shadow
className='hover:shadow-xl transition-shadow'

// Image zoom on hover
className='group-hover:scale-110 transition-transform duration-500'
```

## Quick Copy-Paste

### Gradient Button
```tsx
<button className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all'>
  Button Text
</button>
```

### Stat Card
```tsx
<div className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'>
  <div className='flex items-center justify-between'>
    <div>
      <p className='text-neutral-600 text-sm font-medium'>Label</p>
      <p className='text-3xl font-bold text-neutral-900'>Value</p>
    </div>
    <div className='bg-purple-100 p-3 rounded-xl'>
      {/* Icon */}
    </div>
  </div>
</div>
```

### Feature Card
```tsx
<div className='bg-neutral-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all'>
  <div className='text-5xl mb-4'>🎨</div>
  <h3 className='text-xl font-bold text-neutral-900 mb-3'>Feature Title</h3>
  <p className='text-neutral-600'>Feature description</p>
</div>
```

---

**Happy Coding!** 🎉
