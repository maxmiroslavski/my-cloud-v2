import { Span } from '../../../../components/Span/Span';
import { IUploadFile } from './UploadFile.interface';
import uploadFileIcon from '../../../../assets/uploadIcon.svg';

export const UploadFile = ({ className, ...props }: IUploadFile) => {
	const onChangeHandler = () => {};

	return (
		<div className={className} {...props}>
			<label className="flex items-center gap-[5px] relative cursor-pointer">
				<img src={uploadFileIcon} />
				<Span fontSize="25px">Загрузить</Span>
				<input
					onChange={onChangeHandler}
					onClick={(e: any) => (e.target.value = null)}
					className="absolute z-[-1] opacity-0 block w-0 h-0"
					type="file"
					multiple
				/>
			</label>
		</div>
	);
};
