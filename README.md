ENV only. Deploy with Vercel.

Set env: EMAIL_USER, EMAIL_PASSWORD, EMAIL_RECEIVER.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAhmedBenAbdallahDev%2Fclapeyra-serverless&env=EMAIL_USER,EMAIL_PASSWORD,EMAIL_RECEIVER&envDescription=Gmail%20SMTP%20credentials)

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