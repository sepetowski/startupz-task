import { ContactSchema } from '@/schema/contactSchema';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formSendSimulation(data: ContactSchema) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ status: 200 });
		}, 2000);
	});
}
