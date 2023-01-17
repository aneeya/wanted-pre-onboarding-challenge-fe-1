export interface TodoInput {
  content: string;
  title: string;
}

export interface Todo extends TodoInput {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoKey = '@todos'

export interface TodoProps {
  todo: Todo
}

export interface TodosProps {
  todos: Todo[]
}