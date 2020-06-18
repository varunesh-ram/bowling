import React from 'react';

export default class Pins extends React.Component {
    render() {
        return (
            <div>
                <h4>Pins Down on Player Roll</h4>
                <div className="Container">
                    <button id="pin0" key="0" onClick={() => this.props.pinsDown(0)}>0</button>
                    <button id="pin1" key="1" onClick={() => this.props.pinsDown(1)}>1</button>
                    <button id="pin2" key="2" onClick={() => this.props.pinsDown(2)}>2</button>
                    <button id="pin3" key="3" onClick={() => this.props.pinsDown(3)}>3</button>
                    <button id="pin4" key="4" onClick={() => this.props.pinsDown(4)}>4</button>
                    <button id="pin5" key="5" onClick={() => this.props.pinsDown(5)}>5</button>
                </div>
            </div>
        );
    }
}