import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import'@testing-library/react';
import Button from "./Button";


test("test whether the button element is presnet in the document",()=>{
    render(<Button/>);
    const buttonEl = screen.getByText("click me");
    expect(buttonEl).toBeInTheDocument();
})



test("test whether the event listner is being called on click",()=>{
    console.log = jest.fn();
    render(<Button/>);
    const buttonEl = screen.getByText("click me");
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveBeenCalledWith("I got clicked")
})