import React from 'react';

export default class Pins extends React.Component {

    pins = () => {
        let pins = [];
        for (let i = 0; i < 11; i++) {
            pins.push(
                <button id={"pin"+i} key={i} onClick={() => this.props.pinsDown(i)}>{i}</button>
            );
        }
        return pins;
    };

    render() {
        return (
            <div>
                <h4>Pins Down on Player Roll</h4>
                <div className="Container">
                   {this.pins()}
                </div>
            </div>
        );
    }
}