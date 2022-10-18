import { Component, FormEvent, ReactNode, useState } from "react";
import { Button } from "../Button";

import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid'; 
import { ITask } from "../../types/task";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
// FUNCTION COMPONENTS.
function Form({setTasks}: Props) {

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: FormEvent<HTMLElement>) {
        event.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks, 
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        )
        clearForm()
    }

    function clearForm() {
        setTask("");
        setTime("00:00");
    }

    return(
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new study
                </label>
                <input
                    type={"text"}
                    name="task"
                    id="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
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
                    max={"06:30:00"}
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    required
                />
            </div>
            <Button type="submit">
                Add
            </Button>
        </form>
    );

}
// CLASS COMPONENTS.
class Form1 extends Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        task: "",
        time: "00:00"
    }

    addSchedule(event: FormEvent<HTMLElement>) {
        event.preventDefault();
        this.props.setTasks(oldTasks =>
            [
                ...oldTasks, 
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        )
        this.clearForm();
    }

    clearForm() {
        this.setState({
            task: '',
            time: '00:00'
        })
    }

    render(): ReactNode {
        return(
            <form className={style.novaTarefa} onSubmit={this.addSchedule.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new study
                    </label>
                    <input
                        type={"text"}
                        name="task"
                        id="task"
                        value={this.state.task}
                        onChange={(event => this.setState({...this.state, task: event.target.value}))}
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
                        max={"06:30:00"}
                        value={this.state.time}
                        onChange={(event => this.setState({...this.state, time: event.target.value}))}
                        required
                    />
                </div>
                <Button type="submit">
                    Add
                </Button>
            </form>
        );
    }
}

export { Form };


