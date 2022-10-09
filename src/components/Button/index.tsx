import { Component, ReactNode } from "react";
import style from './Button.module.scss';

// CLASS COMPONENTS.
class Button extends Component<{children: ReactNode, type?: "button" | "submit" | "reset" | undefined}> {
    render(): ReactNode {
        const { type = "button" } = this.props; 
        return(
            <button className={style.botao} type={type}>
                {this.props.children}
            </button>
        )
    }
}

export { Button }