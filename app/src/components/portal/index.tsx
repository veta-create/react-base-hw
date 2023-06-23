import { Component } from 'react';
import ReactDOM from "react-dom";

class Portal extends Component {

    el = document.createElement("div");

    componentDidMount(): void {
        document.body.appendChild(this.el);
    }

    componentWillUnmount(): void {
        document.body.removeChild(this.el);
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(children, this.el);
    }
};

export default Portal;