import React from 'react';
import { render, screen, cleanup, act } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';


describe('Verifica se a pagina é reenderizada corretamente', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData)
    })
    await act(async () =>{
    render(<App />)
    } )
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  }); 
  test('renderização da pagina', () => {
    const title = screen.getByRole('heading', {  name: /starwars planets/i})
    expect(title).toBeInTheDocument();

    const inputName = screen.getByTestId('name-filter')
    expect(inputName).toBeInTheDocument();

    const inputColumn = screen.getByTestId('column-filter');
    expect(inputColumn).toBeInTheDocument()

    const inputComparison =screen.getByTestId('comparison-filter')
    expect(inputComparison).toBeInTheDocument()

    const inputValue = screen.getByTestId('value-filter')
    expect(inputValue).toBeInTheDocument()

    const buttonFilter = screen.getByTestId('button-filter')
    expect(buttonFilter).toBeInTheDocument()

    const test = screen.getByRole('cell', {  name: /tatooine/i})
    expect(test).toBeInTheDocument()
  });
  test('testando filtro por nome', async () => {
    expect(await screen.findAllByRole('row')).toHaveLength(11)
    
    const inputName = screen.getByTestId('name-filter')
    userEvent.type(inputName, 'Tatooine')
    expect(screen.getAllByRole('row')).toHaveLength(2)
  })
  test('testando filtro por numero', async () => {
    expect(await screen.findAllByRole('row')).toHaveLength(11)
    
    const inputColumn = screen.getByTestId('column-filter');
    const inputComparison =screen.getByTestId('comparison-filter')
    const inputValue = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByTestId('button-filter')

    userEvent.click(inputColumn)
    userEvent.click(screen.getAllByRole('option', {name:'population'})[0])

    userEvent.click(inputComparison)
    userEvent.click(screen.getByRole('option', {name: 'menor que'}))

    userEvent.type(inputValue, '1000000')
    userEvent.click(buttonFilter)

    expect( screen.queryAllByRole('row')).toHaveLength(7)
  })
});

