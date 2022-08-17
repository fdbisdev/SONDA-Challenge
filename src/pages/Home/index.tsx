import React, { useEffect } from 'react';
import TodosList from '../../components/TodosList';
import { Title, Container, TextWrapper, InputSearch, SearchIcon, ButtonSearch } from './styles';
import getTodos from '../../services/api';
import { ITodos } from 'src/utils/types';
import { ScrollView } from 'react-native';

const Home: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([]);
  const [completed, setCompleted] = React.useState<ITodos[]>([]);
  const [notCompleted, setNotCompleted] = React.useState<ITodos[]>([]);
  const [searched, setSearched] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [auxTodos, setAuxTodos] = React.useState<ITodos[]>([]);

  const getTodoList = async () => {
    const todosList = await getTodos();
    setTodos(todosList);
    separeteCompleted(todosList);
  }

  const handleSearch = () => {
    setSearched(true);
    const filteredTodos: ITodos[] = []
    todos.map((todo: ITodos) => {

      if (todo.title.includes(search)) {
        filteredTodos.push(todo);
      }

    })

    setAuxTodos(filteredTodos);

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
              <TodosList todos={auxTodos} />
            )
        }
      </>
    )
  }

  const TodoList = () => {

    return (
      <ScrollView
        style={{ width: '100%', padding: 10 }}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        horizontal
      >
        <TodosList todos={completed} completed={true} />
        <TodosList todos={notCompleted} />
      </ScrollView>
    )
  }


  return (
    <Container>
      <TextWrapper>
        <InputSearch
          placeholder="Digite o título do todo"
          onChangeText={setSearch}
        />
        <ButtonSearch onPress={handleSearch}>
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
