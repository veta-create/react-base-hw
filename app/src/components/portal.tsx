import React, { Component } from 'react';
import ReactDOM from "react-dom";

interface PortalPropsTypes {
    isModal: boolean,
    id?: string,
    children: React.ReactNode
};

class Portal extends Component<PortalPropsTypes> {

    el = document.createElement("div");

    componentDidMount(): void {
        if (this.props.isModal) {
            document.body.appendChild(this.el);
        } else {
            if (this.props.id) {
                document.getElementById(this.props.id)?.appendChild(this.el);
            };
        };
    };

    componentWillUnmount(): void {
        if (this.props.isModal) {
            document.body.removeChild(this.el);
        } else {
            if (this.props.id) {
                document.getElementById(this.props.id)?.removeChild(this.el);
            };
        };
    };

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(children, this.el);
    };
};

export default Portal;