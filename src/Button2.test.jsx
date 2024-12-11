import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Button2 from "./Button2";

test("check if the button have the tests of submit",()=>{
    render(<Button2/>)
    const buttEl = screen.getByText("Submit")
    expect(buttEl).toBeInTheDocument();
})