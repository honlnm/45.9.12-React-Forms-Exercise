import React from "react";
import { render } from "@testing-library/react";
import ToDoApp from "./ToDoApp";

it("renders without crashing", function () {
    render(<ToDoApp />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<ToDoApp />);
    expect(asFragment()).toMatchSnapshot();
});
