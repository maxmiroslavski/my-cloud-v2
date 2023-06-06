import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFetchPost = () => {
	const [isError, setIsError] = useState<boolean | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const postData = async (
		url: string,
		body: {},
		headers: {},
		navigateTo?: string
	) => {
		setIsLoading(true);
		setIsError(false);

		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: headers,
		});

		console.log(res);

		if (!res.ok) {
			setIsError(true);
			setIsLoading(false);
			return;
		}

		setIsError(false);
		setIsLoading(false);

		navigateTo && navigate(navigateTo);
	};

	return {
		postData,
		isError,
		isLoading,
	};
};
