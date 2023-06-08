import { Span } from '../../../../components/Span/Span';
import downloadIcon from '../../../../assets/downloadIcon.svg';
import deleteIcon from '../../../../assets/deleteIcon.svg';
import fileIcon from '../../../../assets/fileIcon.svg';
import { downloadFile } from '../../../../functions/downloadFile';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { rerenderPage } from '../../../../store/uiSlice';

export const FileCard = ({ url, name }: { url: string; name: string }) => {
	const dispatch = useAppDispatch();

	const dowloadFileHandler = async () => {
		const res = await fetch(url);

		console.log(res);

		const blob = await res.blob();

		console.log(blob);

		downloadFile(blob, name);
	};

	const deleteFileHandler = async () => {
		const res = await fetch(url, { method: 'DELETE' });

		console.log(res);

		if (!res.ok) return;

		dispatch(rerenderPage());
	};

	return (
		<div className="h-[200px] w-[250px] bg-White p-[10px]">
			<div className="h-[140px] w-[100%] bg-LightGray flex items-center justify-center">
				<img src={fileIcon} width="100" />
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
						<img className="w-[25px] mb-[2px]" src={deleteIcon} />
					</button>
				</div>
			</div>
		</div>
	);
};
