import React from "react"
import { Item } from "./Item";
import style from './List.module.scss';

const List = () => {
	const schedules = [
		{
				schedule: 'React',
				time: '02:00:00'
		},
		{
				schedule: 'Vue',
				time: '01:00:00'
		},
		{
				schedule: 'Angular',
				time: '05:00:00'
		},
		{
				schedule: 'Svelt',
				time: '01:00:00'
		},
	]
	return(
			
		<aside className={style.listaTarefas}>
			<h2> Studys of day </h2>
			<ul>
				{
					schedules.map((item, index) => (
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