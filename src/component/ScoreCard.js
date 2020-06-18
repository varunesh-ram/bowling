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
        for (let i = 0; i <= 20; i++) {
            const colSpanValue = i > 17 ? "2" : "3";
            rolls.push(
                <td key={i} id={"r" + i} colSpan={colSpanValue}>
                </td>
            );
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
                            </td>
                        </tr>
                        <tr>{this.footer()}</tr>
                    </tbody>
                </table>
            </div>
        );
    }
}