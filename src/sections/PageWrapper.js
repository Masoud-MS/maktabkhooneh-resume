import React, {Component} from 'react';
import TitlesSection from './TitlesSection';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import NavigationBar from './NavigationBar';
import SnowStorm from 'react-snowstorm';
import data from '../data.json'

import './PageWrapper.css'

class PageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 0,
            color: data.colors[0].foreGround,
            background: data.colors[0].backGround,
            icon: data.colors[0].icon
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor = () => {
        let theme_num= this.state.theme + 1;
        if(theme_num > 6) theme_num=0;
        this.setState({
            theme: this.state.theme < 6 ? this.state.theme + 1 : 0,
            color: data.colors[theme_num].foreGround,
            background: data.colors[theme_num].backGround,
            icon: data.colors[theme_num].icon

        });
    }

    render() {
        return (
            <div>


                <div className="icon-menu" onClick={this.changeColor}>
                    <img src={this.state.icon[0]} alt="Painter icon"/>
                    <div style={{color: this.state.color}}>{data.menus[1].iconTitle}</div>

                </div>

                <SnowStorm flakesMaxActive={100} snowColor={this.state.color}  animationInterval = {20} snowCharacter = {"*"} />
                <NavigationBar color={this.state.color} background={this.state.background[0]}/>
                <TitlesSection color={this.state.color} background={this.state.background[0]} icon={this.state.icon[1]}/>
                <AboutSection color={this.state.color} background={this.state.background[1]} icon={this.state.icon[1]}/>
                <SkillSection color={this.state.color} background={this.state.background[2]}/>
            </div>
        )
    }
}

export default PageWrapper;