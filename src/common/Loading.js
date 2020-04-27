import React, { Component } from "react";
import {Spinner} from 'react-bootstrap';

export default class Loading extends Component {
    state = {
        loading: false
    };


    render() {
        const { loading } = this.state;

        return (
            <div >

                <Spinner  animation="border" role="status">
                    {loading && (
                        <i
                            className="fa fa-refresh fa-spin"
                            style={{ marginRight: "5px" }}
                        />
                    )}
                    {loading && <span className="sr-only">Loading Data from Server</span>}
                </Spinner>
            </div>
        );
    }
}
