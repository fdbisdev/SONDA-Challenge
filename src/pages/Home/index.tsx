import React, { useEffect } from 'react';
import TodosList from '../../components/TodosList';
import { Title, Container, TextWrapper, InputSearch, SearchIcon, ButtonSearch } from './styles';
import getTodos from '../../services/api';
import { ITodos } from 'src/utils/types';

const Home: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([]);
  const [completed, setCompleted] = React.useState<ITodos[]>([]);
  const [notCompleted, setNotCompleted] = React.useState<ITodos[]>([]);
  const [searched, setSearched] = React.useState(false);

  const getTodoList = async () => {
    const todosList = await getTodos();
    setTodos(todosList);
    separeteCompleted(todosList);
  }

  const separeteCompleted = (todos: ITodos[]) => {
    const completed: ITodos[] = [];
    const notCompleted: ITodos[] = [];

    todos.forEach(todo => {
      if (todo.completed) {
        completed.push(todo);
      } else {
        notCompleted.push(todo);
      }
    });

    setCompleted(completed);
    setNotCompleted(notCompleted);
  }


  useEffect(() => {
    getTodoList();
  }, []);

  const SearchedTodoList = () => {
    return (
      <>
        {
          todos?.length === 0 ? (
            <Title>Nenhum todo encontrado</Title>
          )
            :
            (
              <TodosList todos={todos} />
            )
        }
      </>
    )
  }

  const TodoList = () => {

    return (
      <>
        <TodosList todos={completed} completed={true} />
        <TodosList todos={notCompleted} />
      </>
    )
  }


  return (
    <Container>
      <TextWrapper>
        <InputSearch
          placeholder="Digite o título do todo"
        />
        <ButtonSearch>
          <SearchIcon name='search' />
        </ButtonSearch>
      </TextWrapper>
      {
        searched ? SearchedTodoList() : TodoList()
      }
    </Container>
  );
}

export default Home;
