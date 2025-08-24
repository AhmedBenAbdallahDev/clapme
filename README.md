# Clapeyra Serverless

Complete energy audit website with serverless backend on Vercel.

## 🚀 One-Click Deploy to Vercel

Deploy this complete website instantly with Vercel! This button will:
- ✅ **Deploy frontend** (HTML, CSS, JS, images)
- ✅ **Deploy serverless function** (email handling)
- ✅ **Prompt for environment variables** (your email settings)
- ✅ **Give you a live website** instantly!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAhmedBenAbdallahDev%2Fclapeyra-serverless&env=EMAIL_USER,EMAIL_PASSWORD,EMAIL_RECEIVER&envDescription=Gmail%20SMTP%20credentials%20for%20contact%20form&envLink=https%3A%2F%2Fsupport.google.com%2Faccounts%2Fanswer%2F185833)

### 📝 You'll be prompted to enter:
- **EMAIL_USER**: `your-gmail@gmail.com` (your Gmail address)
- **EMAIL_PASSWORD**: `your-app-password` (Gmail app password)
- **EMAIL_RECEIVER**: `contact@yourdomain.com` (where to receive forms)

*After deployment, your website will be live at `your-project.vercel.app`*

---

## Architecture

- **Frontend**: Static HTML/CSS/JS site
- **Backend**: Vercel serverless function (`/api/send`)
- **Email**: Gmail SMTP via Nodemailer
- **Hosting**: Vercel (frontend + serverless functions)

## Local Development

```bash
npm install
vercel dev
```

## Deployment

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Set environment variables**:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASSWORD`: Your Gmail app password
   - `EMAIL_RECEIVER`: Where to receive contact emails
4. **Deploy automatically**

## Environment Variables

Required in Vercel dashboard:
- `EMAIL_USER=your-email@gmail.com`
- `EMAIL_PASSWORD=your-app-password`
- `EMAIL_RECEIVER=contact@yourdomain.com`

## API Endpoint

`POST /api/send` - Contact form submission