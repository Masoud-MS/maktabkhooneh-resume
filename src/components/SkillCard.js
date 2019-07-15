import React, {Component} from 'react';
import './SkillCard.css';

class SkillCard extends Component {
    render() {
        const {skill} = this.props;
        return (
                <div className="card">
                    <img src={skill.content.image} alt="Skill card"/>
                    <h4>{skill.content.title}</h4>
                </div>
        );
    }
}

export default SkillCard;