import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateStory(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(
      `Write a children's story with a clear title and engaging content based on the following prompt. Format the story with a title at the top followed by the story content. The title should be creative and catchy. Make it engaging and appropriate for children: ${prompt}`
    );
    
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Story generation error:', error);
    throw new Error('Failed to generate story');
  }
}