import React from 'react';
import { FlatList, Text } from 'react-native';
import { ITodoList, ITodos } from 'src/utils/types';
import { Container, ListTitle } from './styles';

const TodosList = ({ todos, completed = false }: ITodoList) => {

  const renderTodosItem = ({ item }: { item: ITodos }) => (
    <Text>{item.title}</Text>
  );


  return (
    <Container>
      <ListTitle>{completed ? 'Completo' : 'Incompleto'}</ListTitle>
      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderTodosItem}
      />
    </Container>
  )
}

export default TodosList;
