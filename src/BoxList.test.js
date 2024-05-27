import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "500", width = "500", color = "blue") {
    const heightInput = boxList.getByLabelText("Box Height");
    const widthInput = boxList.getByLabelText("Box Width");
    const backgroundInput = boxList.getByLabelText("Box Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("X");
    fireEvent.click(button);
}

test("renders without crashing", function () {
    render(<BoxList />);
})

test("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

test("can add a new box", function () {
    const boxList = render(<BoxList />);

    // no boxes yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    addBox(boxList);

    // expect to see a box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
      width: 300px;
      height: 300px;
      background-color: blue;
    `);
    // expect form to be empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

    // expect(asFragment()).toMatchSnapshot();
});

it("can remove a box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("X");

    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});