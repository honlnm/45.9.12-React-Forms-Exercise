import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

function addToDo(ToDoList, task = "write tests") {
    const taskInput = ToDoList.getByLabelText("Task:");
    fireEvent.change(taskInput, { target: { value: task } });
    const submitButton = ToDoList.getByText("Add a toDo!");
    fireEvent.click(submitButton);
}

it("renders without crashing", function () {
    render(<ToDoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a toDo", function () {
    const list = render(<ToDoList />);
    addToDo(list);

    // expect form to clear and toDo to be on the page
    expect(list.getByLabelText("Task:")).toHaveValue("");
    expect(list.getByText("write tests")).toBeInTheDocument();
    expect(list.getByText("Edit")).toBeInTheDocument();
    expect(list.getByText("X")).toBeInTheDocument();
});

it("can edit a toDo", function () {
    const list = render(<ToDoList />);
    addToDo(list);

    fireEvent.click(list.getByText("Edit"));
    const editInput = list.getByDisplayValue("write tests");
    fireEvent.change(editInput, { target: { value: "sleep" } });
    fireEvent.click(list.getByText("Update!"));

    // expect only edited toDo to appear
    expect(list.getByText("sleep")).toBeInTheDocument();
    expect(list.queryByText("write tests")).not.toBeInTheDocument();
});

it("can delete a toDo", function () {
    const list = render(<ToDoList />);
    addToDo(list);

    fireEvent.click(list.getByText("X"));

    // expect toDo to be gone
    expect(list.queryByText("write tests")).not.toBeInTheDocument();
});