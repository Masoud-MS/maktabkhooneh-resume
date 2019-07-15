import React, {Component} from 'react';
import data from '../data.json';
import Fullpage from '../components/Fullpage';
import {SocialIcon} from 'react-social-icons';
import DownIcon from "../components/DownIcon";
import { Link, Element} from 'react-scroll';
import './TitlesSection.css';

class TitlesSection extends Component {
    render() {
        return (
            <div>
                <Fullpage className="first" style={{color: this.props.color,  backgroundColor: this.props.background}}>

                    <h1 className="title">
                        {data.title}
                    </h1>
                    <div>
                        <h2>{data.subtitle}</h2>
                    </div>
                    <div className="icon-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon">
                                        <SocialIcon url={data.links[key]}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Fullpage>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} delay={200}>
                    <DownIcon icon={this.props.icon} onClick={() => console.log('I am working')} />
                </Link>
                <Element name="About" className="element"/>
            </div>
        );
    }
}

export default TitlesSection;