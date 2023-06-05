import { useState } from 'react';

export const useFetchPost = () => {
	const [isError, setIsError] = useState<boolean | null>(null);

	const fetchData = async (url: string, body: {}, headers: {}) => {
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: headers,
		});

		if (!res.ok) {
			setIsError(true);
		}

		setIsError(false);

		console.log(res);
	};

	return {
		fetchData,
		isError,
	};
};
