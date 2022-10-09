import style from '../List.module.scss';

interface ISchedule {
	schedule: string;
	time: string;
}

function Item({ schedule, time }: ISchedule) {
	return(
		<li className={style.item}>
			<h3>{schedule}</h3>
			<span>{time}</span>
		</li>
	)
}

export { Item };