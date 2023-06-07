import { Heading } from '../../../../components/Heading/Heading';
import { FileCard } from './FileCard';

import { useState, useEffect } from 'react';

import { storage } from '../../../../config/firebase';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

export const Files = () => {
	const email = sessionStorage.getItem('email');
	const [storeItems, setStoreItems] =
		useState<{ id: string; url: string; name: string }[]>();

	useEffect(() => {
		const getData = async () => {
			const res = await listAll(ref(storage, `${email}`));

			const arr = [];

			for (const item of res.items) {
				arr.push({
					id: v4(),
					name: item.name,
					url: await getDownloadURL(item),
				});
			}

			setStoreItems(arr);
		};

		getData();
	}, []);

	console.log(storeItems);

	return (
		<div className="p-[30px]">
			<Heading fontSize="32px">Файлы</Heading>
			<div className="mt-[20px]">
				{storeItems?.map((item) => (
					<FileCard key={item.id} url={item.url} name={item.name} />
				))}
			</div>
		</div>
	);
};
