/**
 * @jest-environment jsdom
 */

 import CreateFormInputs from ".";
 import { screen, render } from "@testing-library/react";
 
 describe("CreateFormInputs", () => {
   it("renders create workout form", () => {
     render(<CreateFormInputs />);
     let content = screen;
     expect(content).toBeTruthy();
   })
 
 })
 