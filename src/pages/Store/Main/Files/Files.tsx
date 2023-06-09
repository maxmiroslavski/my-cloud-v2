import { Heading } from '../../../../components/Heading/Heading';
import { FileCard } from './FileCard';

import { useState, useEffect } from 'react';

import { storage } from '../../../../config/firebase';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { AnimatePresence } from 'framer-motion';
import { setFilesAmount } from '../../../../store/uiSlice';
import { getLoadingMessage } from '../../../../store/uiSlice';

export const Files = () => {
	const dispatch = useAppDispatch();
	const email = sessionStorage.getItem('email');

	const rerender = useAppSelector((state) => state.ui.rerenderPage);

	const [storeItems, setStoreItems] =
		useState<{ id: string; url: string; name: string }[]>();

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

		dispatch(setFilesAmount(arr.length));
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		getData();
	}, [rerender]);

	return (
		<div className="p-[30px] relative">
			<Heading fontSize="32px">Файлы</Heading>
			<div className="mt-[20px] flex gap-[20px] flex-wrap">
				<AnimatePresence>
					{storeItems?.map((item) => (
						<FileCard
							key={item.id}
							url={item.url}
							id={item.id}
							name={item.name}
						/>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
