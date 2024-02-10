import React from 'react';

export const Form = () => {
	return (
		<form className='w-full max-w-md bg-secondary-white shadow-sm rounded-md px-6 pt-14 pb-7 mt-6 flex flex-col items-center gap-4'>
			<div className='w-full'>
				<label htmlFor='name' className='sr-only  text-gray-700 '>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Name*'
					className=' p-2 w-full border rounded-md'
				/>
			</div>
			<div className='w-full'>
				<label htmlFor='name' className='sr-only  text-gray-700 '>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Name*'
					className=' p-2 w-full border rounded-md'
				/>
			</div>
			<div className='w-full'>
				<label htmlFor='name' className='sr-only  text-gray-700 '>
					Name
				</label>
				<textarea
					id='message'
					name='message'
					placeholder='Message*'
					rows={10}
					className=' p-2 w-full border rounded-md resize-none overflow-auto '
				/>
			</div>
			<button className='inline-flex items-center justify-center rounded-3xl  duration-200  md:text-lg text-primary-white bg-primary-gray font-bold hover:text-primary-gray hover:bg-primary-white border border-transparent hover:border-primary-gray transition-all h-9  px-3 '>
				Shoot us a message
			</button>
		</form>
	);
};
