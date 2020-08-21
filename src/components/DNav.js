import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

export default class DNav extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar bg="dark">
                        <Navbar.Brand href="#home">
                            <img
                                src="data:image/png;base64,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"
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                alt="exl"
                            />
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                    
                </>
            </div>
        )
    }
}
