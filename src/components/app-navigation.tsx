import React from 'react';

import styled from 'styled-components';

const Container = styled.section``;

export interface AppNavigationProps {
  title: string;
}

export function AppNavigation(props: AppNavigationProps) {
  return (
    <Container>
      <h1>{props.title}</h1>
    </Container>
  );
}
