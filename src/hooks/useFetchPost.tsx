import { useState } from 'react';

export const useFetchPost = () => {
	const [isError, setIsError] = useState(false);

	const fetchData = async (url: string, body: {}, headers: {}) => {
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: headers,
		});

		console.log(res);
	};

	return {
		fetchData,
	};
};
