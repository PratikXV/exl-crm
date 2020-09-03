import React, { Component } from 'react';
import '../styles/Dform.css';
import Dtable from './Dtable';

export default class Dform extends Component {
    render() {
        return (
            
            <div align="center" className="data-form">
                <h3>Users Details</h3>
                <label className="disp-label"><b>Id</b></label>
                <input type="text" placeholder="Enter your id" id="uid" defaultValue="E-111" readOnly/>
                <br /><br />
                <label className="disp-label"><b>Name</b></label>
                <input type="text" placeholder="Enter your Name" id="name" defaultValue="John Doe" readOnly/>
                <br /><br />
                <label className="disp-label"><b>Designation</b></label>
                <input type="text" placeholder="Enter your designation" id="desg" defaultValue="Senior Manager" readOnly/>
                <br /><br />
                <label className="disp-label"><b>Department</b></label>
                <input type="text" placeholder="Enter your department" id="dept" defaultValue="Sales" readOnly/>
                <br /><br />
                <label className="disp-label"><b>Email</b></label>
                <input type="email" placeholder="Enter your email" id="email" defaultValue="John.Doe@gmail.com" readOnly/>
                <br /><br />
                <label className="disp-label"><b>Mobile Number</b></label>
                <input type="text" placeholder="Enter your Mobile Number" id="mob" defaultValue="9867543210" readOnly/>
                <br /><br />
                <label className="disp-label"><b>Assest Details</b></label>
                <input type="text" placeholder="Enter your Domain ID" id="dom_id" size="30" defaultValue="Dell Vostro 3360, 8GB, Windows 10" readOnly/>
                <br /><br />
                <div>
                    <Dtable />
                </div>
            </div>
        )
    }
}
