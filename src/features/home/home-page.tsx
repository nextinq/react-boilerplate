import React from 'react';
import { AppNavigation } from '../../components/app-navigation';
import styled from 'styled-components';
import { useGetTodos } from '../../hooks/use-get-todos';
import { link } from 'fs';

const Container = styled.section`
  display: grid;
  grid-template-rows: 80px 1fr;
  min-height: 100vh;
  align-items: start;
  justify-content: center;
`;

export function HomePage() {
  const { data: todos } = useGetTodos();
  return (
    <Container>
      <AppNavigation title="React Boilerplate" />
      <section>
        <h3>Home page</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
