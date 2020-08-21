import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../styles/Table.css'

const Dtable = () => {
    const tdata = [
        { date: "21-08-2020 13:30", ticketid: "INC789654", status:"Open", ticket_details: "Unable to login to Outlook" },
        { date: "10-08-2020 10:00", ticketid: "INC1478562", status:"Closed", ticket_details: "Internet not working" },
        { date: "05-08-2020 14:30", ticketid: "INC147856", status:"Closed", ticket_details: "Unable to connect to VPN" },
    ]
    const renderTable = (tdata, index) => {
        return (
            <tr key={index}>
                <td>{tdata.date}</td>
                <td>{tdata.ticketid}</td>
                <td>{tdata.status}</td>
                <td>{tdata.ticket_details}</td>
            </tr>
        )
    }
    return (
        <div>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th><b>Date/Time</b></th>
                        <th><b>Ticket ID </b></th>
                        <th><b>Status</b></th>
                        <th><b>Ticket Details</b></th>
                    </tr>
                </thead>
                <tbody>
                    {tdata.map(renderTable)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
};

export default Dtable;
