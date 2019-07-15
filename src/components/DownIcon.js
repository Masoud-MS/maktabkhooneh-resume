import React, {Component} from 'react';
import './DownIcon.css';
// import data from "../data.json";

class DownIcon extends Component {
    render() {
        return (
            <div className="pageDown" onClick= {this.props.onClick}>
                <div id="iconImage">
                    <img src={this.props.icon}  alt="down Icon"/>
                </div>
            </div>
        );
    }
}

export default DownIcon;