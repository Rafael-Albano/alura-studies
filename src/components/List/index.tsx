import { Item } from "./Item";
import style from './List.module.scss';

type Task = {
	task: string;
	time: string;
}

const List = ({ task }: {task: Task[]}) => {
	return(
		<aside className={style.listaTarefas}>
			<h2>Studys of day</h2>
			<ul>
				{
					task.map((item, index) => (
							<Item
								key={index}
								{...item}
							/>
					))
				}
			</ul>
		</aside>
	);
}

export { List };
export type { Task };
