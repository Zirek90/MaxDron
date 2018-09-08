import React, {Component} from 'react';
import MenuList from "./MenuList/MenuList";

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollPositionY: 0,
            opacity: 0
        }
    }

    componentDidMount() {
        return window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        return window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const scrollPositionY = +window.scrollY;
        if (scrollPositionY >= 660) {
            this.setState({
                scrollPositionY,
                opacity: 1
            });
        } else if (scrollPositionY < 660) {
            this.setState({
                scrollPositionY,
                opacity: 0
            })
        }
    }

    render() {
        const isScrolling = this.state.scrollPositionY

        return (
            <div style={{opacity:this.state.opacity, transition: '1s ease'}}>
                <MenuList/>
            </div>
        );
    }
}

export default Menu;