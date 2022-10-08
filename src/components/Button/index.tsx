import { Component, ReactNode } from "react";

// CLASS COMPONENTS.
class Button extends Component {
    render(): ReactNode {
        const isActive = false;
        const backgroundColor = isActive ? 'green' : 'red';

        const styles = {
            backgroundColor
        }
        return(
            <button style={styles}>
                Save
            </button>
        )
    }
}

export { Button }