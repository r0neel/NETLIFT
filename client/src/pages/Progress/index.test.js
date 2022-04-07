/**
 * @jest-environment jsdom
 */

import { default as Progress } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Progress", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <Progress />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
