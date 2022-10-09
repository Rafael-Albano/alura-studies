import { Component, FormEvent, ReactNode } from "react";
import { Button } from "../Button";
import { Task } from "../List";
import style from './Form.module.scss';

// CLASS COMPONENTS.
class Form extends Component<{
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
}> {
    state = {
        task: "",
        time: "00:00:00"
    }

    addSchedule(event: FormEvent<HTMLElement>) {
        event.preventDefault();
        this.props.setTask(oldTasks =>[...oldTasks, {...this.state}])
        this.clearForm();
    }

    clearForm() {
        this.setState({
            task: '',
            time: '00:00:00'
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
                        max={"01:30:00"}
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