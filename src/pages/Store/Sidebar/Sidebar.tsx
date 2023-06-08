import { Heading } from '../../../components/Heading/Heading';
import { Span } from '../../../components/Span/Span';

import myCloudIcon from '../../../assets/myCloudIcon.svg';
import cloudIcon from '../../../assets/cloudIcon.svg';
import { UploadFile } from './UploadFile/UploadFile';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const Sidebar = () => {
	const filesAmount = useAppSelector(
		(state) => state.ui.filesAmount
	).toString();
	return (
		<div className="bg-White p-[20px] ">
			<div className="flex gap-[10px] items-center">
				<img src={myCloudIcon} />
				<Heading fontSize="38px">My Cloud</Heading>
			</div>

			<div className="border-b-[1px] border-Gray mt-[25px]" />

			<UploadFile className="mt-[20px]" />

			<div className="border-b-[1px] border-Gray mt-[25px]" />

			<div className="flex items-center gap-[5px] mt-[20px]">
				<img src={cloudIcon} />
				<Span fontSize="25px">Хранилище</Span>
			</div>

			<div className="mt-[20px]">
				<Span className="text-Gray" fontSize="18px">
					{filesAmount} / 20 Файлов
				</Span>

				<div className="relative bg-LightGray w-[100%] h-[6px] rounded-[5px] mt-[10px]">
					<div
						className={`absolute bg-Primary h-[6px] rounded-[5px]  duration-200`}
						style={{ width: `calc(5% * ${filesAmount})` }}
					/>
				</div>
			</div>
		</div>
	);
};
