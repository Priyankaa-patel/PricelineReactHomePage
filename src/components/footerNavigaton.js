import React from 'react';

const FooterNavigation = ({ title, navigationList = [] }) => {
    return (
        <div className="footerInner">
            <div className="footertitle">{title}</div>
            <div className="listNavigation">
                <ul>
                    {navigationList.map((lists) => (
                        <li key={lists}><a href='#'>{lists}</a></li>
                    ))}
                    {/* <li><a href='#'>Hotel Express Deals™</a></li>
                    <li>Hotels</li>
                    <li>Cars</li>
                    <li>Flights</li>
                    <li>Packages</li>
                    <li>Cruises</li>
                    <li>Priceline Rewards™ Visa® Card</li> */}
                </ul>
            </div>
        </div>
    );
}

export default FooterNavigation;