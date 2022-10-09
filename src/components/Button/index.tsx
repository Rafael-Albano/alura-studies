import { Component, ReactNode } from "react";
import style from './Button.module.scss';
// CLASS COMPONENTS.
class Button extends Component<{children: ReactNode}> {
    render(): ReactNode {
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export { Button }