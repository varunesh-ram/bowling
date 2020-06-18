import React from "react";
import { shallow } from "enzyme";
import Pins from "../component/Pins";

describe("Pins component", () => {
    let wrapper, pinsDown;
    beforeEach(() => {
        pinsDown = jest.fn();
        wrapper = shallow(<Pins pinsDown={pinsDown} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render Buttons to capture pin down for gutter ball", () => {
        expect(wrapper.find("button").at(0)).toBeDefined();
        expect(wrapper.find("button").at(0).text()).toEqual("0");
        expect(pinsDown).toHaveBeenCalledTimes(0);
        wrapper.find("button").at(0).simulate("click");
        expect(pinsDown).toHaveBeenCalledTimes(1);
        expect(pinsDown).toHaveBeenCalledWith(0);
    });

    it("should render Buttons to capture pin down for game of ones", () => {
        expect(wrapper.find("button").at(1)).toBeDefined();
        expect(wrapper.find("button").at(1).text()).toEqual("1");
        expect(pinsDown).toHaveBeenCalledTimes(0);
        wrapper.find("button").at(1).simulate("click");
        expect(pinsDown).toHaveBeenCalledTimes(1);
        expect(pinsDown).toHaveBeenCalledWith(1);
    });
});