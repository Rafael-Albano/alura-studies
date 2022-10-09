import style from '../List.module.scss';

interface ITask {
	task: string;
	time: string;
}

function Item({ task, time }: ITask) {
	return(
		<li className={style.item}>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	)
}

export { Item };