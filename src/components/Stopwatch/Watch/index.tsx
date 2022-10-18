import style from './Watch.module.scss'
interface Props {
	time: number | undefined
}
function Watch({ time = 0 }: Props) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const [minutesTen, minutesUnity] = String(minutes).padStart(2, '0');
	const [secondTen, secondUnity] = String(seconds).padStart(2, '0');

	return(
		<>
			<span className={style.relogioNumero}>{minutesTen}</span>
			<span className={style.relogioNumero}>{minutesUnity}</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>{secondTen}</span>
			<span className={style.relogioNumero}>{secondUnity}</span>
		</>
	);
}

export { Watch };