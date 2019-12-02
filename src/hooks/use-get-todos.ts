import { useQuery } from 'react-query';

//FIXME: Replace with real api call
async function getTodosFromAPI() {
  return Promise.resolve({
    items: [
      { id: '1', name: 'Todo 1' },
      { id: '2', name: 'Todo 2' },
      { id: '3', name: 'Todo 3' }
    ]
  });
}

export function useGetTodos() {
  const { data, isLoading, error } = useQuery('get-todos', getTodosFromAPI);
  const items = (data && data.items) || [];
  return { data: items, isLoading, error };
}
