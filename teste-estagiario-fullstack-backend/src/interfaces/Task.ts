export interface Task {
  id: number;
  title: string;
  description: string;
  userId: number; // User relationship
  completed: boolean;
}
