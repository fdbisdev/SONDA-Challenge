export interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoList {
  todos: ITodos[] | null | [];
  completed?: boolean;
}
