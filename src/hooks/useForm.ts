import { ChangeEvent, FormEvent, useState } from 'react';

interface FormValues {
	[key: string]: string;
}

type typesInput =
	| ChangeEvent<HTMLInputElement>
	| ChangeEvent<HTMLSelectElement>;

export const useForm = (initialState: FormValues) => {
	const [formValues, setFormValues] = useState(initialState);

	const handleChange = (e: typesInput) => {
		const { name, value } = e.target;

		const newFormValue = {
			...formValues,
			[name]: value,
		};

		setFormValues(newFormValue);
	};

	const handleSubmit = (
		e: FormEvent<HTMLFormElement>,
		callback: () => void
	) => {
		e.preventDefault();
		callback();
	};

	const reset = () => {
		setFormValues(initialState);
	};

	return {
		formValues,
		handleChange,
		handleSubmit,
		reset,
	};
};
