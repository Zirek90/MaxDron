import React, {Component} from 'react';


class HeaderTitle extends Component {
    render() {
        return (
            <div className="header-title">
                <h2 className="header-title-header">MaxDron</h2>
                <p className="header-title-paragraph">latamy dla najlepszych</p>
                <div className="header-title-btn">
                    <a href="#contact">O nas</a>
                </div>
            </div>

        );
    }
}

export default HeaderTitle;