import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

it("renders without crashing", function () {
    render(<NewToDoForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewToDoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function () {
    const createMock = jest.fn();
    const { getByText } = render(<NewToDoForm createToDo={createMock} />);
    const createButton = getByText("Add a toDo!");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});
