import { Span } from '../../../../components/Span/Span';
import { IUploadFile } from './UploadFile.interface';
import uploadFileIcon from '../../../../assets/uploadIcon.svg';
import { storage } from '../../../../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { rerenderPage } from '../../../../store/uiSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';

export const UploadFile = ({ className, ...props }: IUploadFile) => {
	const dispatch = useAppDispatch();
	const email = sessionStorage.getItem('email');

	const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files === null) return;

		const file = e.target.files[0];

		const fileRef = ref(storage, `${email}/${file.name}`);

		await uploadBytes(fileRef, file);

		dispatch(rerenderPage());
	};

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
