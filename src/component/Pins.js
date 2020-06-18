import React from 'react';

export default class Pins extends React.Component {
    render() {
        return (
            <div>
                <h4>Pins Down on Player Roll</h4>
                <div className="Container">
                    <button id="pin0" key="0" onClick={() => this.props.pinsDown(0)}>0</button>
                    <button id="pin1" key="1" onClick={() => this.props.pinsDown(1)}>1</button>
                </div>
            </div>
        );
    }
}