import React from 'react';
import ScoreCard from './ScoreCard';
import Pins from './Pins';

export default class BowlingGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: []
        }
    }

    updateRolls = () => {
        let tempRolls = this.state.rolls;
        tempRolls.push(0);
        this.setState({ rolls: tempRolls });
        this.updateScore(tempRolls);
    };

    updateScore = (tempRolls) => {
        if (tempRolls.length > 19) {
            const score = tempRolls.reduce(function (a, b) {
                return a + b;
            }, 0);
            this.setState({ score });
        }
    };

    render() {
        return (
            <div className="Game">
                <Pins pinsDown={this.updateRolls} />
                <ScoreCard rolls={this.state.rolls} score={this.state.score} />
            </div>);
    };
}