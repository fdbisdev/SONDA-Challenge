import React from 'react';
import TodosList from '../../components/TodosList';
import { Container, TextWrapper, InputSearch, SearchIcon, ButtonSearch } from './styles';

const Home: React.FC = () => {
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
      <TodosList />
    </Container>
  );
}

export default Home;
