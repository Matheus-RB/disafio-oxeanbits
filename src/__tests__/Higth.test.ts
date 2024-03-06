import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useSWR from 'swr';
import High from '../pages/High/High';

jest.mock('swr');

describe('High component', () => {
  test('renders correctly when data is loaded', async () => {
    const mockData = {
      results: [
        { id: 1, title: 'Movie 1', backdrop_path: '/path1.jpg' },
        { id: 2, title: 'Movie 2', backdrop_path: '/path2.jpg' },
        { id: 3, title: 'Movie 3', backdrop_path: '/path3.jpg' },
      ],
    };

    useSWR.mockReturnValueOnce({ data: mockData });

    render(
      <MemoryRouter>
        <High />
      </MemoryRouter>
    );

    // Verifica se os títulos dos filmes estão sendo renderizados
    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
      expect(screen.getByText('Movie 3')).toBeInTheDocument();
    });

    // Verifica se as imagens dos filmes estão sendo renderizadas
    expect(screen.getAllByAltText(/image-/)).toHaveLength(3);
  });

  test('renders correctly when data is loading', () => {
    useSWR.mockReturnValueOnce({ data: undefined });

    render(
      <MemoryRouter>
        <High />
      </MemoryRouter>
    );

    // Verifica se o texto de carregamento está presente
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
