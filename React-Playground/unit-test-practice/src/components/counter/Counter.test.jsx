import React from "react";
import Counter from "./Counter";
import {render, fireEvent, cleanup} from "@testing-library/react";

let getByTestId;


/**
 * This does the const{getByTestId} = renderCounter(); logic in each test function.
 * I moved it to here to free up the code.
 */
beforeEach(() => {
    const component = renderCounter();
    getByTestId = component.getByTestId;
});

//This cleans up the DOM in the react tree that is rendered after each test.
afterEach(cleanup);

const renderCounter = () => {
    return render(<Counter/>);
};


test("Counter header renders correctly", () => {
    const {baseElement} = renderCounter();
    expect(baseElement).toBeDefined();
});

/**
 * This simply gets the text that is displayed from the header element.
 *
 * const component = renderCounter();
 * const headerElement = component.getByTestId("header");
 *
 * Destructuring:
 * The destructed method removes the bloated variables that are being repeated.
 * Component is removed altogether, and now we are left with the getByTestId object instead.
 */
test("Counter displays correct text", () => {

    const headerElement = getByTestId("header");

    expect(headerElement.textContent).toBe("My Counter");
});


test("Counter initially starts with text = 0", () => {

    const counterElement = getByTestId("counter");

    expect(counterElement.textContent).toBe("0");
});

test("Input contains initial value = 1", () => {

    const inputElement = (getByTestId("input"));

    expect(inputElement.value).toBe("1");
})

test("Add button renders properly", () => {

    const addButton = getByTestId("addButton");

    expect(addButton.textContent).toBe("+");
});

test("Subtract button renders properly", () => {

    const subButton = getByTestId("subButton");

    expect(subButton.textContent).toBe("-");
});

test("Changing value of input works", () => {

    const inputElement = getByTestId("input");

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    });
    expect(inputElement.value).toBe("5");
});

test("Incrementing counter works correctly", () => {

    const addButton = getByTestId("addButton");
    const counter = getByTestId("counter");

    fireEvent.click(addButton);
    expect(counter.textContent).toBe("1");

})

test("Decrementing counter works correctly", () => {

    const subButton = getByTestId("subButton");
    const counter = getByTestId("counter");

    fireEvent.click(subButton);
    expect(counter.textContent).toBe("-1");

});