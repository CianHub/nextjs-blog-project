function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    res.status(201).json({ message: 'Succesfully stored message!', message });
  }
}

export default handler;
