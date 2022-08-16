import React, { useEffect } from 'react';
import { Text } from 'react-native';
import getTodos from '../../services/api';
import { Container } from './styles';

const TodosList: React.FC = () => {
  const [todos, setTodos] = React.useState([]);

  const getTodoList = async () => {
    const todosList = await getTodos();
    setTodos(todosList);
  }

  useEffect(() => {
    getTodoList();
  }, []);


  return (
    <Container>
      <Text>List</Text>
    </Container>
  )
}

export default TodosList;
