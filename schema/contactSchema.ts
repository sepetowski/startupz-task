import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(3, 'Please provide your name'),
	email: z.string().email('Please provide a valid email'),
	message: z.string().min(10, 'Message is too short'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
