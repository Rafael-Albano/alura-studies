import { Component, ReactNode } from "react";
import { Button } from "../Button";
import style from './Form.module.scss';

// CLASS COMPONENTS.
class Form extends Component {
    render(): ReactNode {
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="schedule">
                        Add a new study
                    </label>
                    <input
                        type={"text"}
                        name="schedule"
                        id="schedule"
                        placeholder={"what do you want to study"}
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input 
                        type="time"
                        step={"1"}
                        name="time"
                        id="time"
                        min={"00:00:00"}
                        max={"01:30:00"}
                        required
                    />
                </div>
                <Button/>
            </form>
        );
    }
}

export { Form };