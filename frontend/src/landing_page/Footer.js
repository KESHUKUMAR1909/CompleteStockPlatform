import React from 'react';
import './Footer.css';

function Footer() {
     return (
          <footer className='mt-5 p-2 border-top' style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
               <div className='container mt-5'>

                    <div className='row'>
                         <div className='col'>
                              <img src='media/images/logo.svg' style={{ width: '50%' }} />
                              <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                         </div>
                         <div className='col'>
                              <p>Company</p>
                              <div className="footer-links">
                                   <a href="#">Open Demat Account</a>
                                   <a href="#">Minor Demat Account</a>
                                   <a href="#">NRI Demat Account</a>
                                   <a href="#">Commodity</a>
                                   <a href="#">Dematerialisation</a>
                                   <a href="#">Fund Transfer</a>
                                   <a href="#">MTF</a>
                                   <a href="#">Referral Program</a>
                              </div>
                         </div>
                         <div className='col'>
                              <p>Support</p>
                              <div className="footer-links">
                                   <a href="#">Contact Us</a>
                                   <a href="#">Support Portal</a>
                                   <a href="#">How to File a Complaint?</a>
                                   <a href="#">Status of Your Complaints</a>
                                   <a href="#">Bulletin</a>
                                   <a href="#">Circular</a>
                                   <a href="#">Z-Connect Blog</a>
                                   <a href="#">Downloads</a>
                              </div>
                         </div>
                         <div className='col'>
                              <p>Account</p>
                              <div className="footer-links">
                                   <a href="#">About</a>
                                   <a href="#">Philosophy</a>
                                   <a href="#">Press & Media</a>
                                   <a href="#">Careers</a>
                                   <a href="#">Zerodha Cares (CSR)</a>
                                   <a href="#">Zerodha.tech</a>
                                   <a href="#">Open Source</a>
                              </div>
                         </div>
                    </div>

                    <div className='row mt-5 fs-10 text-muted'>
                         <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    </div>

                    <div className='row fs-10 text-muted'>
                         <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    </div>

                    <div className='row fs-10 text-muted'>
                         <p>
                              <a className="footer-link" href='#'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                         </p>
                    </div>

                    <div className='row fs-10 text-muted'>
                         <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    </div>

                    <div className='row fs-10 text-muted'>
                         <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    </div>

                    <div className='row fs-10 text-muted'>
                         <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <a className="footer-link" href='#'>please create a ticket here</a>.</p>
                    </div>

                    <div className='column  text-center text-muted'>
                         <a href='#' className='px-2 text-muted'>NSE</a>
                         <a href='#'  className='px-2 text-muted'>BSE​</a>
                         <a href='#'  className='px-2 text-muted'>MCX</a>
                         <a href='#'  className='px-2 text-muted'>Terms & conditions</a>
                         <a href='#'  className='px-2 text-muted'>Policies and procedures</a>
                         <a href='#'  className='px-2 text-muted'>Private Policy</a>
                         <a href='#'  className='px-2 text-muted'>Disclosure</a>
                         <a href='#' className='px-2 text-muted'>For inverstor's action</a>
                         <a href='#'  className='px-2 text-muted'>Investor charter</a>
                    </div>

               </div>
          </footer>
     );
}

export default Footer;
