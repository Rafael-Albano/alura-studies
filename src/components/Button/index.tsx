import { Component, ReactNode } from "react";
import style from './Button.module.scss';
// CLASS COMPONENTS.
class Button extends Component {
    render(): ReactNode {
        return(
            <button className={style.botao}>
                Save
            </button>
        )
    }
}

export { Button }