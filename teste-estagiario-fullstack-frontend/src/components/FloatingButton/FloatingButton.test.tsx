import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import FloatingButton from "./FloatingButton";

describe("FloatingButton", () => {
  it("should render the floating button with the correct icon", () => {
    const handleClick = jest.fn(); // Mock function for onClick

    render(<FloatingButton onClick={handleClick} />);

    // Assert that the button is in the document
    const button = screen.getByTestId("floating-button");
    expect(button).toBeInTheDocument();

    // Assert that the icon is in the button
    const icon = screen.getByTestId("floating-button-icon");
    expect(icon).toBeInTheDocument();
  });

  it("should call onClick when the button is clicked", () => {
    const handleClick = jest.fn(); // Mock function for onClick

    render(<FloatingButton onClick={handleClick} />);

    // Simulate a click event
    const button = screen.getByTestId("floating-button");
    fireEvent.click(button);

    // Assert that the onClick function was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
