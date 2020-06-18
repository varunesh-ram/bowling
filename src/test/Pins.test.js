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

    it("should render 11 Buttons to capture pin down for game", () => {
        wrapper.find("button").forEach((pin,pinIndex) => {
            expect(pin).toBeDefined();
            expect(pin.text()).toEqual(pinIndex.toString());
            expect(pinsDown).toHaveBeenCalledTimes(pinIndex);
            pin.simulate("click");
            expect(pinsDown).toHaveBeenCalledTimes(pinIndex+1);
            expect(pinsDown).toHaveBeenCalledWith(pinIndex);
        });
    });
});