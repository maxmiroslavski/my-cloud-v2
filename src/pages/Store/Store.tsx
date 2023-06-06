import { Sidebar } from './Sidebar/Sidebar';

import s from './Store.module.css';

export const Store = () => {
	return (
		<div className={s.wrapper}>
			<Sidebar />
			<div className={s.main}>Main</div>
		</div>
	);
};
