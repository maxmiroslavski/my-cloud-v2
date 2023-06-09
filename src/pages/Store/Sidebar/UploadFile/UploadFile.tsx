import { Span } from '../../../../components/Span/Span';
import { IUploadFile } from './UploadFile.interface';
import uploadFileIcon from '../../../../assets/uploadIcon.svg';
import { storage } from '../../../../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { rerenderPage } from '../../../../store/uiSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getErrorMessage } from '../../../../store/uiSlice';
import { getLoadingMessage } from '../../../../store/uiSlice';

export const UploadFile = ({ className, ...props }: IUploadFile) => {
	const dispatch = useAppDispatch();
	const email = sessionStorage.getItem('email');
	const itemAmount = useAppSelector((state) => state.ui.filesAmount);

	const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files === null) return;

		const file = e.target.files[0];

		if (itemAmount === 20) {
			dispatch(getErrorMessage('Достигнут лимит загружаемых файлов!'));
			return;
		}

		if (file.size / 1024 / 1024 > 1) {
			dispatch(
				getErrorMessage(
					'Размер загружаемого файла не должен превышать 1МБ!'
				)
			);
			return;
		}

		dispatch(getErrorMessage(''));
		dispatch(getLoadingMessage('Загрузка файла'));

		console.log(file.size / 1024 / 1024);

		const fileRef = ref(storage, `${email}/${file.name}`);

		await uploadBytes(fileRef, file);

		dispatch(rerenderPage());
		dispatch(getLoadingMessage(''));
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
