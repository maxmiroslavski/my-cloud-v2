import { Heading } from '../../../components/Heading/Heading';
import { Span } from '../../../components/Span/Span';

import myCloudIcon from '../../../assets/myCloudIcon.svg';
import uploadFileIcon from '../../../assets/uploadIcon.svg';
import cloudIcon from '../../../assets/cloudIcon.svg';

export const Sidebar = () => {
	return (
		<div className="bg-White p-[20px] ">
			<div className="flex gap-[10px] items-center">
				<img src={myCloudIcon} />
				<Heading fontSize="38px">My Cloud</Heading>
			</div>

			<div className="border-b-[1px] border-Gray mt-[25px]" />

			<div className="flex items-center gap-[5px] mt-[20px]">
				<img src={uploadFileIcon} />
				<Span fontSize="25px">Загрузить</Span>
			</div>

			<div className="border-b-[1px] border-Gray mt-[25px]" />

			<div className="flex items-center gap-[5px] mt-[20px]">
				<img src={cloudIcon} />
				<Span fontSize="25px">Хранилище</Span>
			</div>
		</div>
	);
};
