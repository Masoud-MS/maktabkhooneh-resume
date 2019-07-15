import React, {Component} from 'react';
import data from '../data.json';
import './NavigationBar.css';
import {Link} from 'react-scroll';


class NavigationBar extends Component {
    render() {
        return (
            <div className="nav" style={{color: this.props.color, backgroundColor: this.props.background}}>
                <ul className="menus">
                    {data.menus[0].subMenus.map(subMenu => {
                            return (
                                <Link activeClass="active" to={`${subMenu}`} spy={true} smooth={true} offset={50}
                                      duration={500} delay={200}>
                                    <li onClick={() => console.log(`${subMenu}`)}>{subMenu}</li>
                                </Link>
                            )
                        }
                    )}
                </ul>
            </div>

        );
    }
}

export default NavigationBar;