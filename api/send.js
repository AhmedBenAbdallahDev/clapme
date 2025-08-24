const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, phone, Adresse, type, isDevis } = req.body;
  
  // Validation
  if (!email || !message) {
    return res.status(400).json({ 
      success: false,
      message: "L'email et le message sont requis" 
    });
  }

  // Create email transporter
  const transporter = nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: isDevis 
      ? `Demande de devis de ${name || 'Anonymous'}` 
      : `Message de contact de ${name || 'Anonymous'}`,
    text: `
      Nom: ${name || 'Non fourni'}
      Email: ${email}
      Téléphone: ${phone || 'Non fourni'}
      Adresse : ${Adresse || 'Non fourni'}
      Type: ${type || 'Non fourni'}
      
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ 
      success: true,
      message: "Message envoyé avec succès! Nous vous contacterons bientôt." 
    });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ 
      success: false,
      message: "Erreur lors de l'envoi du message",
      error: error.message 
    });
  }
}
