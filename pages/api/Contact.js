import { MongoClient } from 'mongodb';

async function handler(req, res) {
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
    } else {
      const newMessage = {
        email,
        name,
        message,
      };

      let client;

      try {
        client = await MongoClient.connect(process.env.MONGO_CONNECTION);
      } catch (err) {
        res.status(500).json({ message: 'error with db' });
        return;
      }

      const db = client.db();

      let result;

      try {
        result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;
      } catch (err) {
        client.close();
        res.status(500).json({ message: err.message });
        return;
      }

      client.close();

      res
        .status(201)
        .json({ message: 'success message sent', message: newMessage });
    }
  }
}

export default handler;
