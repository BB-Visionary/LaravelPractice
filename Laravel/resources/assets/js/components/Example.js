import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Laravel extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                A React App with Laravel
                            </div>
                            <div className="card-body">This is React</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("laravel")) {
    ReactDOM.render(<Laravel />, document.getElementById("laravel"));
}
