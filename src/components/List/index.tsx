import { ITask } from "../../types/task";
import { Item } from "./Item";
import style from './List.module.scss';

interface Props {
	task: ITask[],
	selectTask: (selectedTask: ITask) => void
}
const List = ({ task, selectTask }: Props) => {
	return(
		<aside className={style.listaTarefas}>
			<h2>Studys of day</h2>
			<ul>
				{
					task.map((item) => (
						<Item
							key={item.id}
							{...item}
							selectTask={selectTask}
						/>
					))
				}
			</ul>
		</aside>
	);
}

export { List };

