import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderFull = (node: React.ReactElement) => render(<MemoryRouter>{node}</MemoryRouter>);
