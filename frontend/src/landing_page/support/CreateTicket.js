import React from 'react'
function CreateTicket() {
    return (
        <div className='container'>
            <h1 className='text-muted fs-2 p-5'>To create a ticket, select a relevant topic</h1>

            <div className='row text-primary p-5 pt-0' style={{lineHeight:"1.9"}}>
                <div className='col-4'>
                    <h6 style={{color:"black"}}>➕ Account Opening</h6>
                    <ul className='list-unstyled'>
                        <li>Resident individual</li>
                        <li>Minor</li>
                        <li>Non Resident Indian (NRI)</li>
                        <li>Company, Partnership, HUF and LLP</li>
                        <li>Glossary</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h6 style={{color:"black"}}>👤 Your Zerodha Account</h6>
                    <ul className='list-unstyled'>
                        <li>Your Profile</li>
                        <li>Account modification</li>
                        <li>Client Master Report (CMR) and DP</li>
                        <li>Nomination</li>
                        <li>Transfer and conversion of securities</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h6 style={{color:"black"}}>📊 Kite</h6>
                    <ul className='list-unstyled'>
                        <li>IPO</li>
                        <li>Trading FAQs</li>
                        <li>Margin Trading Facility (MTF) and Margins</li>
                        <li>Charts and orders</li>
                        <li>Alerts and Nudges</li>
                        <li>General</li>
                    </ul>
                </div>
            </div>

            <div className='row text-primary p-5' style={{lineHeight:"1.9"}}>
                <div className='col-4'>
                    <h6 style={{color:"black"}}>💳 Funds</h6>
                    <ul className='list-unstyled'>
                        <li>Add money</li>
                        <li>Withdraw money</li>
                        <li>Add bank accounts</li>
                        <li>eMandates</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h6 style={{color:"black"}}>📁 Console</h6>
                    <ul className='list-unstyled'>
                        <li>Portfolio</li>
                        <li>Corporate actions</li>
                        <li>Funds statement</li>
                        <li>Reports</li>
                        <li>Profile</li>
                        <li>Segments</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h6 style={{color:"black"}}>🪙 Coin</h6>
                    <ul className='list-unstyled'>
                        <li>Mutual funds</li>
                        <li>National Pension Scheme (NPS)</li>
                        <li>Features on Coin</li>
                        <li>Payments and Orders</li>
                        <li>General</li>
                    </ul>
                </div>
            </div>

        </div>

    );
}

export default CreateTicket;