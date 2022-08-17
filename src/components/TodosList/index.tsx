import React from 'react';
import { FlatList, Text } from 'react-native';
import { ITodoList, ITodos } from 'src/utils/types';
import { Container, ListTitle } from './styles';
import TodoElement from './TodoElement';

const TodosList = ({ todos, completed = false }: ITodoList) => {

  const renderTodosItem = ({ item }: { item: ITodos }) => (
    <TodoElement item={item} />
  );


  return (
    <Container style={{ width: '30%' }}>
      <ListTitle>{completed ? 'Completo' : 'Incompleto'}</ListTitle>
      <FlatList
        style={{ width: '100%', padding: 10 }}
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderTodosItem}
      />
    </Container>
  )
}

export default TodosList;
