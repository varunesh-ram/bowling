import React from 'react';
import BowlingGame from '../component/BowlingGame';
import ScoreCard from '../component/ScoreCard';
import { shallow } from 'enzyme';

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

});