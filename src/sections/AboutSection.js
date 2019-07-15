import React, {Component} from 'react';
import Fullpage from '../components/Fullpage'
import data from '../data.json';
import './AboutSection.css'
import { Link, Element} from 'react-scroll';
import DownIcon from "../components/DownIcon";

class AboutSection extends Component {
    render() {
        return (
            <div>
                <Fullpage className="second" style={{color: this.props.color, backgroundColor: this.props.background}}>
                    <h3>
                        {data.sections[0].title}
                    </h3>
                    <div className="paragraphs">
                        {data.sections[0].items.map(p => {
                                return <p>{p.content}</p>
                            }
                        )}
                    </div>
                </Fullpage>
                <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} delay={200}>
                    <DownIcon icon={this.props.icon} onClick={() => console.log('I am working')}/>
                </Link>
                <Element name="Skills" className="element"/>
            </div>
        );
    }
}

export default AboutSection;