import React from 'react';
import { Text, View } from 'react-native';
import { ITodos } from 'src/utils/types';

import { Container } from './styles';

const TodoElement = ({ item }: { item: ITodos }) => {
  return (
    <Container>
      <Text>{item.title}</Text>
    </Container>
  );
}

export default TodoElement;
