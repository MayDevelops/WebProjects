import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});


it("Renders button correctly", () => {
  const {getByTestId} = render(<Button label={"click me please"}></Button>)
  expect(getByTestId('button')).toHaveTextContent("click me please");
});
