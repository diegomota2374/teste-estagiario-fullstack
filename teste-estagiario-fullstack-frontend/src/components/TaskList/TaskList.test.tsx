import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import { useTasks } from "../../context/TaskContext";

// Mock the useTasks hook
jest.mock("../../context/TaskContext");

const mockTasks = [
  {
    id: 1,
    userId: 1,
    title: "Test Task 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    userId: 1,
    title: "Test Task 2",
    description: "Description 2",
    completed: true,
  },
];

const setup = () => {
  (useTasks as jest.Mock).mockReturnValue({ tasks: mockTasks });
  render(<TaskList />);
};

describe("TaskList", () => {
  test("renders the title and list of tasks", () => {
    setup();

    // Check if the title is rendered
    expect(screen.getByTestId("task-list-title")).toHaveTextContent(
      "Lista de Tarefas"
    );

    // Check if the list container is rendered
    expect(screen.getByTestId("task-list")).toBeInTheDocument();

    // Check if individual task items are rendered
    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });
});
