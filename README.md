# Clapeyra Serverless

Complete energy audit website with serverless backend on Vercel.

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