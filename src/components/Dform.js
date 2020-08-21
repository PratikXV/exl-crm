import React, { Component } from 'react';
import '../styles/Dform.css';
import Dtable from './Dtable';

export default class Dform extends Component {
    render() {
        return (
            <div align="center">
                <form onSubmit={this.onSubmit} className="form" align="center">
                    <label><b>Id</b></label>
                    <input type="text" placeholder="Enter your id" id="uid" defaultValue="E-111"/>
                    <br /><br />
                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter your Name" id="name" defaultValue="John Doe"/>
                    <br /><br />
                    <label><b>Designation</b></label>
                    <input type="text" placeholder="Enter your designation" id="desg" defaultValue="Senior Manager"/>
                    <br /><br />
                    <label><b>Department</b></label>
                    <input type="text" placeholder="Enter your department" id="dept" defaultValue="Sales"/>
                    <br /><br />
                    <label><b>Email</b></label>
                    <input type="email" placeholder="Enter your email" id="email" defaultValue="John.Doe@gmail.com"/>
                    <br /><br />
                    <label><b>Mobile Number</b></label>
                    <input type="text" placeholder="Enter your Mobile Number" id="mob" defaultValue="9867543210"/>
                    <br /><br />
                    <label><b>Assest Details</b></label>
                    <input type="text" placeholder="Enter your Domain ID" id="dom_id" size="30" defaultValue="Dell Vostro 3360, 8GB, Windows 10"/>
                    <br /><br />
        
                </form>
                <Dtable/>
            </div>
        )
    }
}
