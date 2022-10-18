import { Button } from "../Button";
import { Watch } from "./Watch";
import style from './StopWatch.module.scss';
import { timeForSeconds } from '../../common/utils/time';
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
	selected: ITask | undefined,
	finishTask: () => void
}
function StopWatch({ selected, finishTask } :Props): JSX.Element {
	const [time, setTime] = useState<number>();
	useEffect(() => {
		if(selected?.time) {
			setTime(timeForSeconds(selected?.time))
		}	
	}, [selected])
	

	function regressive(counter: number = 0) {
		setTimeout(() => {
			if(counter > 0) {
				setTime(counter - 1);
				return regressive(counter - 1);
			}
			finishTask();
		}, 1000)
	}

	return(
		<div className={style.cronometro}>
			<p className={style.titulo}> Choice a card and start the stopWatch </p>
			<div className={style.relogioWrapper}>
				<Watch time={time}/>
			</div>
			<Button onClick={() => regressive(time)}>
				Start
			</Button>
		</div>
	);
}

export { StopWatch };