import { Component, ReactNode } from "react";
import './style.scss';
// CLASS COMPONENTS.
class Button extends Component {
    render(): ReactNode {
        return(
            <button className="botao">
                Save
            </button>
        )
    }
}

export { Button }