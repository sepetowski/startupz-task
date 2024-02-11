'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema, contactSchema } from '@/schema/contactSchema';
import { formSendSimulation } from '@/lib/utils';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

export const Form = () => {
	const [isSending, setIsSending] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactSchema>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const onSubmit = async (data: ContactSchema) => {
		setIsSending(true);
		try {
			const res = (await formSendSimulation(data)) as { status: number };
			if (res.status !== 200) throw new Error();
			toast.success('Message was successfully sent!');
			reset();
		} catch (_) {
			toast.error('Something went wrong. Please try again.');
		}
		setIsSending(false);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full max-w-md bg-secondary-white shadow-sm rounded-md px-6 pt-14 pb-7 mt-6 flex flex-col items-center gap-4 '>
			<div className='w-full space-y-1.5'>
				<label htmlFor='name' className='sr-only  text-gray-700 '>
					Name
				</label>
				<Input id='name' placeholder='Name*' {...register('name')} />
				<ErrorMessage error={errors.name} />
			</div>
			<div className='w-full space-y-1.5'>
				<label htmlFor='email' className='sr-only  text-gray-700 '>
					Name
				</label>
				<Input id='email' placeholder='Email*' {...register('email')} />
				<ErrorMessage error={errors.email} />
			</div>
			<div className='w-full space-y-1.5'>
				<label htmlFor='message' className='sr-only  text-gray-700 '>
					Name
				</label>
				<textarea
					id='message'
					placeholder='Message*'
					rows={10}
					className=' flex  w-full rounded-md shadow-sm   px-3 py-2 text-sm  file:bg-transparent  placeholder:text-secondary-gray disabled:cursor-not-allowed disabled:opacity-50 resize-none overflow-auto '
					{...register('message')}
				/>
				<ErrorMessage error={errors.message} />
			</div>

			<Button
				disabled={isSending}
				className='text-primary-white bg-primary-gray font-bold hover:text-primary-gray hover:bg-primary-white border border-transparent hover:border-primary-gray disabled:hover:bg-primary-gray/70 disabled:hover:border-transparent disabled:hover:text-primary-white disabled:bg-primary-gray/70'
				size={'sm'}>
				{isSending ? (
					<>
						<Loader2 className='mr-2 animate-spin' /> <span>Please wait</span>
					</>
				) : (
					'Shoot us a message'
				)}
			</Button>
		</form>
	);
};
