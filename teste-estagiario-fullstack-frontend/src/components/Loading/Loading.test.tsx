// src/components/Loading/Loading.test.tsx
import { render, screen } from "@testing-library/react";
import Loading from "./Loading"; // Update with the correct path to your component

describe("Loading Component", () => {
  it("should render the loading container with spinner and text", () => {
    render(<Loading />);

    // Check if the loading container is in the document
    expect(screen.getByTestId("loading-container")).toBeInTheDocument();

    // Check if the loading spinner is in the document
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    // Check if the loading text is in the document
    expect(screen.getByTestId("loading-text")).toHaveTextContent(
      "Carregando..."
    );
  });
});
