import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export class Button extends Component {
    notify = () => {
        toast.success("Success!", {position: toast.POSITION.TOP_LEFT});
    };

    render() {
        return (
            <div className="ShowNotificationButton">
                <button onClick={this.notify}>{this.props.text}</button>
                <ToastContainer />
            </div>
        );
    }
}