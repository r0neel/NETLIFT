/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import SetBtn from ".";

describe("Like button", () => {
  beforeEach(() => {
    render(<SetBtn />);
  });

  test("renders a button with like inside", () => {
    let likeBtn = screen.getByRole("button");
    expect(likeBtn).toBeTruthy();
  });
});
