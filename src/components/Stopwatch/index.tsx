import { Button } from "../Button";
import { Watch } from "./Watch";
import style from './StopWatch.module.scss';

function StopWatch(): JSX.Element {
	return(
		<div className={style.cronometro}>
			<p className={style.titulo}> Choice a card and start the stopWatch </p>
			<div className={style.relogioWrapper}>
				<Watch/>
			</div>
			<Button>
				Start
			</Button>
		</div>
	);
}

export { StopWatch };