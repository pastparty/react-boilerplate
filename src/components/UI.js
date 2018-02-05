import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

class UI extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default UI;
