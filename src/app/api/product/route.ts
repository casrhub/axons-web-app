import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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

    // Return the response from the model
    return NextResponse.json({
      response: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response('Error processing your request', { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
