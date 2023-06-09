import { Span } from '../../../../components/Span/Span';
import downloadIcon from '../../../../assets/downloadIcon.svg';
import deleteIcon from '../../../../assets/deleteIcon.svg';
import fileIcon from '../../../../assets/fileIcon.svg';
import { downloadFile } from '../../../../functions/downloadFile';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { rerenderPage } from '../../../../store/uiSlice';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getLoadingMessage } from '../../../../store/uiSlice';

export const FileCard = ({
	url,
	name,
	id,
}: {
	url: string;
	name: string;
	id: string;
}) => {
	const dispatch = useAppDispatch();
	const [preview, setPreview] = useState<string | ArrayBuffer | null>('');
	const [isLoading, setIsLoading] = useState(true);

	const getData = async () => {
		setIsLoading(true);

		const res = await fetch(url);

		const blob = await res.blob();

		if (
			blob.type === 'image/jpeg' ||
			blob.type === 'image/png' ||
			blob.type === 'image/svg+xml'
		) {
			const reader = new FileReader();
			reader.readAsDataURL(blob);
			return new Promise((resolve) => {
				reader.onloadend = () => {
					const base64data = reader.result;
					resolve(setPreview(base64data));
					resolve(setIsLoading(false));
				};
			});
		} else {
			setPreview('document');
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const dowloadFileHandler = async () => {
		const res = await fetch(url);

		console.log(res);

		const blob = await res.blob();

		downloadFile(blob, name);
	};

	const deleteFileHandler = async () => {
		dispatch(getLoadingMessage('Удаление Файла'));

		const res = await fetch(url, { method: 'DELETE' });

		if (!res.ok) return;

		dispatch(rerenderPage());
		dispatch(getLoadingMessage(''));
	};

	return (
		<>
			{!isLoading && (
				<motion.div
					key={id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="h-[200px] w-[250px] bg-White p-[10px]"
				>
					<div
						className={
							'cardPreviewImage flex items-center justify-center bg-LightGray'
						}
						style={{
							background: `url(${preview}) no-repeat center center/cover`,
						}}
					>
						{preview === 'document' && (
							<img src={fileIcon} width="100" />
						)}
					</div>

					<div className="mt-[10px] flex justify-between items-center">
						<Span
							className="text-ellipsis overflow-hidden whitespace-nowrap w-[150px]"
							fontSize="18px"
						>
							{name}
						</Span>

						<div className="flex gap-[5px] items-center">
							<button onClick={dowloadFileHandler}>
								<img className="w-[25px]" src={downloadIcon} />
							</button>

							<button onClick={deleteFileHandler}>
								<img
									className="w-[25px] mb-[2px]"
									src={deleteIcon}
								/>
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};
