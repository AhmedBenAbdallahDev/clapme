const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  try {
    console.log('Function started, method:', req.method);
    console.log('Environment check - Email_User:', process.env.Email_User ? 'Set' : 'Missing');
    
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

    // Create email transporter (using EXACT same config as working backend)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Password,
      },
    });

    // Email content (EXACT same as working backend)
    const mailOptions = {
      from: process.env.Email_User,
      to: process.env.Email_Receiver,
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

    await transporter.sendMail(mailOptions);
    res.json({ 
      success: true,
      message: "Message envoyé avec succès! Nous vous contacterons bientôt." 
    });
    
  } catch (error) {
    console.error("Function error:", error);
    res.status(500).json({ 
      success: false,
      message: "Erreur lors de l'envoi du message",
      error: error.message 
    });
  }
}
