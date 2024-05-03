import { NextResponse } from "next/server";
import OpenAI from "openai";
import { Pool } from 'pg';

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Your Neon database URL
});

export async function POST(request: Request) {
  try {
    // Extract the transcript from the request JSON
    const data = await request.json();
    const { transcript } = data;

    // Use the transcript to communicate with the OpenAI model
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:"Your role as an assistant is to offer structured feedback on user explanations submitted via voice-to-text. Start your feedback with a brief overview of the user's main points. Follow this with a numbered list of areas for improvement, focusing on enhancing clarity and precision. Conclude with positive reinforcement, encouraging the user to keep using the Feynman Technique for effective learning. Suggest explaining concepts as if to a friend to deepen understanding. Provide up-to-date study resources, including links to PDFs, videos, and books. Format your response with these sections: * Overview, * Areas for Improvement, * Study Materials., please also do not use markdown text formatting, just do normal text, please mantain breif and concise answers"
        },
        { role: "user", content: transcript },
      ],
      model: "gpt-4",
    });

    const responseText = completion.choices[0].message.content;

    // Store the response in the Neon database
    const client = await pool.connect();
try {
  // Attempt to create the table if it doesn't exist
  const createTableText = `
    CREATE TABLE IF NOT EXISTS responses (
      id SERIAL PRIMARY KEY,
      transcript TEXT,
      response TEXT
    );
  `;
  await client.query(createTableText);

  // Insert the transcript and response into the table
  const insertText = 'INSERT INTO responses (transcript, response) VALUES ($1, $2)';
  await client.query(insertText, [transcript, responseText]);
} catch (error) {
  console.error('Database operation failed:', error);
  // Handle the error appropriately
} finally {
  client.release();
}

    // Return the response from the model
    return NextResponse.json({
      response: responseText,
    });

    

  } catch (error) {
    console.error('Error:', error);
    return new Response('Error processing your request', { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
