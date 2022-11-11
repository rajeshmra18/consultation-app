import React, { Component } from 'react';

class Contactmap extends Component {
    render() {
        return (
            <div className="sigma_contact-map">
                {/* <iframe
                    title="contactmap"
                    src=""
                    height={600}
                    allowFullScreen>
                </iframe> */}
                <iframe title="contactmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.64342413848!2d76.22325045!3d10.511387599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1668140823354!5m2!1sen!2sin" height={600} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        );
    }
}

export default Contactmap;