import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export const generateTLDR = async (content: string) => {
    try {
        const { text } = await generateText({
            model: google('models/gemini-1.5-flash-001'),
            prompt: `Summarize this article in a concise, engaging TLDR suitable for a tweet. Article content: ${content}`,
            temperature: 0.7, // Adjust for creativity; lower values make the output more deterministic
        });

        return { text: text.trim() };   
    } catch (error) {
        console.error('Exception caught while generating TLDR:', error);
        return { error: 'Exception occurred during TLDR generation. Please try again.' }    ;
    }
}