import React from 'react';
import { Constants } from '../constants/Constants';

export default class ScoreCard extends React.Component {
    header = () => {
        const headerTitles = Constants.SCORECARD_TITLES.map((title) => (
            <th key={title} colSpan="6">
                {title}
            </th>
        ));
        return headerTitles;
    };

    pinsDownOnRolls = () => {
        const rolls = [];
        let i = 0;
        for (let frame = 0; frame < 10; frame++) {
            const colSpanValue = frame > 8 ? "2" : "3";
            if (frame === 9) {
                this.generateRollsForTenthFrame(rolls, frame, colSpanValue, i);
            }
            else {
                this.generateRollsForFirstNineFrames(rolls, frame, colSpanValue, i);
            }
            if (this.isStrike(i)) {
                i++;
            } else {
                i += 2;
            }
        }
        return rolls;
    };

    footer = () => {
        let bottomLine = [];
        for (let i = 0; i < 11; i++) {
            bottomLine.push(
                <td key={"frame" + i} colSpan="6">
                </td>
            );
        }
        return bottomLine;
    };

    isStrike(i) {
        return this.props.rolls[i] === 10;
    }

    generateRollsForFirstNineFrames(rolls, frame, colSpanValue, i) {
        rolls.push(
            <td key={(2 * frame)} id={"r" + (2 * frame)} colSpan={colSpanValue}>
                {this.props.rolls.length > i ? this.isStrike(i) ? "" : this.props.rolls[i] : ""}
            </td>
        );
        rolls.push(
            <td key={(2 * frame) + 1} id={"r" + ((2 * frame) + 1)} colSpan={colSpanValue}>
                {this.isStrike(i) ? "X" : this.props.rolls.length > i + 1 ? this.isSpar(i) ? "/" : this.props.rolls[i + 1] : ""}
            </td>);
    }

    isSpar(i) {
        return this.props.rolls[i] + this.props.rolls[i + 1] === 10;
    }

    generateRollsForTenthFrame(rolls, frame, colSpanValue, i) {
        rolls.push(
            <td key={(2 * frame)} id={"r" + (2 * frame)} colSpan={colSpanValue}>
                {this.props.rolls.length > i ? this.isStrike(i) ? "X" : this.props.rolls[i] : ""}
            </td>
        );
        rolls.push(
            <td key={(2 * frame) + 1} id={"r" + ((2 * frame) + 1)} colSpan={colSpanValue}>
                {this.props.rolls.length > i + 1 ? this.isSpar(i) ? "/" : this.isStrike(i+1) ? "X" : this.props.rolls[i + 1] : ""}
            </td>);
        rolls.push(
            <td key={20} id={"r" + (20)} colSpan={colSpanValue}>
                {this.props.rolls.length > i + 2 ? this.props.rolls[i + 2] === 10 ? "X" : this.props.rolls[i + 2] : ""}
            </td>);
    }

    render() {
        return (
            <div className="Container">
                <table id="table" className="Scorecard" cellPadding="1" cellSpacing="0">
                    <tbody>
                        <tr>{this.header()}</tr>
                        <tr>
                            {this.pinsDownOnRolls()}
                            <td id="total-score" colSpan="6">
                                {this.props.score}
                            </td>
                        </tr>
                        <tr>{this.footer()}</tr>
                    </tbody>
                </table>
            </div>
        );
    }
}