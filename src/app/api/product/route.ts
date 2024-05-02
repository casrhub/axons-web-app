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
          content:"As an assistant, your role is to provide structured and concise feedback on user submissions. Users will provide explanations on specific topics through voice-to-text transcripts. Begin your response with a brief overview of the user's explanation, highlighting key points. Next, provide a numbered list of specific areas for improvement, emphasizing clarity and precision. Conclude by encouraging the user with a positive note and remind them to continue employing the Feynman Technique for effective learning. Suggest they explain concepts to you as if you were a friend, reinforcing their understanding through this method."
        },
        { role: "user", content: transcript },
      ],
      model: "gpt-3.5-turbo-0125",
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
