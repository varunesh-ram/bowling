import React from 'react';
import BowlingGame from '../component/BowlingGame';
import ScoreCard from '../component/ScoreCard';
import Pins from '../component/Pins';
import { shallow, mount } from 'enzyme';

describe(("<BowlingGame/> component"), () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BowlingGame />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render ScoreCard component", () => {
        expect(wrapper.find(ScoreCard)).toBeDefined();
    });

    it("should render Pins component", () => {
        expect(wrapper.find(Pins)).toBeDefined();
    });

});

describe(("<BowlingGame/> Game functionality"), () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(< BowlingGame />);
    });

    it("should score gutter game as 0, if all frames score are 0", () => {
        const zeroPin = wrapper.find(Pins).find("button").at(0);
        for (let i = 0; i < 20; i++) {
            zeroPin.simulate("click");
        }
        const totalScore = wrapper.find(ScoreCard).find("#total-score").text();
        wrapper.find(ScoreCard).find("tr").at(1).find("td").forEach((cell,rollNo) => {
            if (rollNo < 20){
                expect(cell.text()).toEqual("0");
            }
        });

        expect(totalScore).toEqual("0");
    });

    it("should score game of ones as 20, if all frames score are 1", () => {
        const onePin = wrapper.find(Pins).find("button").at(1);
        for (let i = 0; i < 20; i++) {
            onePin.simulate("click");
        }
        const totalScore = wrapper.find(ScoreCard).find("#total-score").text();
        wrapper.find(ScoreCard).find("tr").at(1).find("td").forEach((cell,rollNo) => {
            if (rollNo < 20){
                expect(cell.text()).toEqual("1");
            }
        });

        expect(totalScore).toEqual("20");
    });
});