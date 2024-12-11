import React from "react";
import { render,screen } from "@testing-library/react";
import Button from './Button'
import '@testing-library/jest-dom';


test("test whether button is in the document",()=>{
    render(<Button/>)
    const buttonEl = screen.getByText("Click me")
    expect(buttonEl).toBeInTheDocument();
    
                

})

