import { Component } from 'react';
import ReactDOM from "react-dom";

class Portal extends Component {

    el = document.createElement("div");

    componentDidMount(): void {
        if (this.props.isModal) {
            document.body.appendChild(this.el);
        } else {

        }
        document.getElementById(this.props.id)?.appendChild(this.el);
    }

    componentWillUnmount(): void {
        if (this.props.isModal) {
            document.body.removeChild(this.el);
        } else {
            document.getElementById(this.props.id)?.removeChild(this.el);
        }
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(children, this.el);
    }
};

export default Portal;