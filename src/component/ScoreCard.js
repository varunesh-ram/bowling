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
        let i =0;
        for (let frame = 0; frame < 10; frame++) {
            const colSpanValue = frame > 8 ? "2" : "3";
            let value1 = this.props.rolls.length > i ? this.props.rolls[i] : "";
            let value2 = this.props.rolls.length > i + 1 ? this.props.rolls[i + 1] : "";
            if ( value1 + value2 === 10){
                value2 = "/";
            }
            rolls.push(
                <td key={i} id={"r" + i} colSpan={colSpanValue}>
                    {value1}
                </td>
            );
            rolls.push(
                <td key={i+1} id={"r" + (i+1)} colSpan={colSpanValue}>
                {value2}
                </td>);
                if (frame === 9){
                    let value3 = this.props.rolls.length > i + 2 ? this.props.rolls[i + 2] : "";
                    rolls.push(
                        <td key={i+2} id={"r" + (i+2)} colSpan={colSpanValue}>
                        {value3}
                        </td>);
                }
            i+=2;
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