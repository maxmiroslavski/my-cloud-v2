import { Heading } from '../../../../components/Heading/Heading';
import { FileCard } from './FileCard';

import { useState, useEffect } from 'react';

import { storage } from '../../../../config/firebase';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';

export const Files = () => {
	const email = sessionStorage.getItem('email');
	const rerender = useAppSelector((state) => state.ui.rerenderPage);
	const dispatch = useAppDispatch();

	const [storeItems, setStoreItems] =
		useState<{ id: string; url: string; name: string }[]>();

	console.log(rerender);

	const getData = async () => {
		const res = await listAll(ref(storage, `${email}`));

		console.log(res);

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

	useEffect(() => {
		getData();
	}, [rerender]);

	console.log(storeItems);

	return (
		<div className="p-[30px]">
			<Heading fontSize="32px">Файлы</Heading>
			<div className="mt-[20px] flex gap-[20px] flex-wrap">
				{storeItems?.map((item) => (
					<FileCard key={item.id} url={item.url} name={item.name} />
				))}
			</div>
		</div>
	);
};
