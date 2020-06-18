import React from 'react';
import ScoreCard from './ScoreCard';

export default class BowlingGame extends React.Component {
    render() {
        return (
            <div className="Game">
                <ScoreCard />
            </div>);
    }
}