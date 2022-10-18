import { Component, ReactNode } from "react";
import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: ReactNode
}

// FUNCTION COMPONENTS.
function Button({type, onClick, children}: Props) {
    return(
        <button 
            onClick={onClick}
            className={style.botao} 
            type={type}
        >
            {children}
        </button>
    )
}
// CLASS COMPONENTS.
// class Button1 extends Component<{
//     children: ReactNode, type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }> {
//     render(): ReactNode {
//         const { type = "button", onClick } = this.props; 
//         return(
//             <button 
//                 onClick={onClick}
//                 className={style.botao} 
//                 type={type}
//             >
//                 {this.props.children}
//             </button>
//         )
//     }
// }

export { Button }