# Hart aan Huis - Setup Instructions

## Required Assets

Before running the website, you need to add the following files to the `/public` folder:

### 1. Logo
- **File**: `/public/logo.png`
- **Description**: Hart aan Huis logo
- **Recommended size**: 180x60px (or similar aspect ratio)

### 2. Hero Video
- **File**: `/public/hero-video.mp4`
- **Description**: Background video for the hero section
- **Recommended**: Warm, caring footage related to home care
- **Duration**: 10-30 seconds (will loop)

### 3. Photo
- **File**: `/public/marissa.jpg`
- **Description**: Photo of Marissa for the "Over Mij" section
- **Recommended size**: 600x800px (portrait orientation)

## Contact Information

Update the following contact details in the code:

### Phone Number
Replace `+31612345678` with the actual phone number in:
- `/src/components/Navigation.tsx`
- `/src/components/Footer.tsx`
- `/src/app/page.tsx`

### Email
Replace `info@hartaanhuis.nl` with the actual email in:
- `/src/components/Footer.tsx`
- `/src/app/page.tsx`

### WhatsApp
Update the WhatsApp link with the correct number:
- Format: `https://wa.me/31612345678` (replace with actual number)

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Design System

### Brand Colors
- **White**: `#FFFFFF`
- **Warm Orange**: `#E89355`
- **Olive Green**: `#7C8147`
- **Dark Warm Brown**: `#B47038`

### Typography
- **Headings**: Delicious Handrawn (Google Font)
- **Body**: Inter (Google Font)

### Section Color Pattern
The sections follow a repeating pattern:
1. White background with brown text
2. Orange background with white text
3. Olive green background with white text

## Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Video hero section
- ✅ Service cards with icons
- ✅ FAQ accordion
- ✅ Contact form
- ✅ WhatsApp integration
- ✅ Modern UI with shadcn/ui components
