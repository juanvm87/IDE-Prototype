import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config(); // This loads the environment variables from the .env file

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome To Tracking App Server');
});

app.post('/upload', async (req, res) => {
    const { text } = req.body;
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, 
    });

    try {
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `Make a summary of the given text from most important parts of the terms and conditions.Retrieve the monthly subscription price. \n\n ${text}`,
            max_tokens: 1024,
        });
        console.log(response.choices[0].text);
        res.json(response.choices[0].text);
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});