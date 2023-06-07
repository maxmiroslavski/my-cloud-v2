import { Span } from '../../../../components/Span/Span';
import downloadIcon from '../../../../assets/downloadIcon.svg';
import deleteIcon from '../../../../assets/deleteIcon.svg';
import fileIcon from '../../../../assets/fileIcon.svg';
import { saveAs } from 'file-saver';

export const FileCard = ({ url, name }: { url: string; name: string }) => {
	const dowloadFileHandler = async () => {
		saveAs(url, name);
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

					<button>
						<img className="w-[25px] mb-[2px]" src={deleteIcon} />
					</button>
				</div>
			</div>
		</div>
	);
};
