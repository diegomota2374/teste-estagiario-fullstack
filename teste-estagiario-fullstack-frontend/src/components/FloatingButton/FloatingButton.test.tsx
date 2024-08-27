// src/components/FloatingButton/FloatingButton.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import FloatingButton from "./FloatingButton";

describe("FloatingButton", () => {
  it("should render the floating button with the correct icon", () => {
    // Mock the onClick function
    const handleClick = jest.fn();

    // Render the FloatingButton component
    render(<FloatingButton onClick={handleClick} />);

    // Check if the button and icon are in the document
    expect(screen.getByTestId("floatingButtonButton")).toBeInTheDocument();
    expect(screen.getByTestId("floatingButtonIcon")).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    // Mock the onClick function
    const handleClick = jest.fn();

    // Render the FloatingButton component
    render(<FloatingButton onClick={handleClick} />);

    // Simulate a click event
    fireEvent.click(screen.getByTestId("floatingButtonButton"));

    // Assert that the onClick function was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
