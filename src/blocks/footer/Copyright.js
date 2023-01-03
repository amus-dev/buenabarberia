import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <p>© 2020 Barber Shop React JS Template by <a href="https://www.adveits.com">Adveits</a> / <a className="secondary-semibold" href={ process.env.PUBLIC_URL + "/contacts" }>CONTACTS</a></p>
        </div>
    );
};

export default Copyright;
