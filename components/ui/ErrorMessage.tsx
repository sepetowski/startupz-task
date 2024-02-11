import { cn } from '@/lib/utils';
import React from 'react';
import { FieldError } from 'react-hook-form';

interface ErrorProps {
	error?: FieldError;
	className?: string;
}

export const ErrorMessage = ({ className, error }: ErrorProps) => {
	if (!error) return null;
	return <p className={cn('text-sm font-medium text-red-600   ', className)}>{error.message}</p>;
};
