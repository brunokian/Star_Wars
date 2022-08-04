import React from 'react';
import { render, screen, cleanup, act, within, getByTestId } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';


describe('testando o starwars', () => {
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
  test('renderização dos componentes da pagina', () => {
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
  test('testando filtro por nome - Tatooine', async () => {
    expect(await screen.findAllByRole('row')).toHaveLength(11)
    
    const inputName = screen.getByTestId('name-filter')
    userEvent.type(inputName, 'Tatooine')
    expect(screen.getAllByTestId('planet-name')).toHaveLength(1)
  })
  test('testando filtro por numero', async () => {
    expect(await screen.findAllByRole('row')).toHaveLength(11)
    
    const inputColumn = screen.getByTestId('column-filter');
    const inputComparison =screen.getByTestId('comparison-filter')
    const inputValue = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(inputColumn, 'population')

    userEvent.selectOptions(inputComparison, 'menor que')

    userEvent.type(inputValue, '1000000')

    userEvent.click(buttonFilter)

    expect(screen.getAllByTestId('planet-name')).toHaveLength(2)

    // const deleteFilter = screen.getByRole('button', { name: /delete/i})
    const filterComponent = screen.getByTestId('filter');
    const deleteFilterButton = within(filterComponent).getByRole('button', {  name: /delete/i});

    userEvent.click(deleteFilterButton)

    expect(screen.getAllByTestId('planet-name')).toHaveLength(10)

  })
  test('testando o botão de delete all', async () => {
    const deleteAllButton = screen.getByRole('button', {  name: /deleteAll/i})

    userEvent.click(deleteAllButton)

    expect( screen.queryAllByRole('row')).toHaveLength(11)
  })
  test('testando o botão de delete de filtro especifico', async () => {
    const filterButton = screen.getByRole('button', {  name: /filtrar/i})

    userEvent.click(filterButton)

    expect( screen.queryAllByRole('row')).toHaveLength(9)
  })
  test('testando a ordenação', async () => {
    const hoth = screen.getByRole('cell', {  name: /hoth/i})
    expect(hoth).toBeInTheDocument()
    
    const columnOption = screen.getByTestId('column-sort')
    userEvent.selectOptions(columnOption, 'population')

    const ascendenteOption = screen.getByRole('radio', {  name: /ascendente/i})
    userEvent.click(ascendenteOption)

    const orderButton = screen.getByRole('button', {  name: /ordenar/i})
    userEvent.click(orderButton)

    expect(screen.getAllByTestId('planet-name')).toHaveLength(8)
    // expect(hoth).not.toBeInTheDocument()
  })
  test('testando a ordenação desc', async () => {
    const hoth = screen.getByRole('cell', {  name: /hoth/i})
    expect(hoth).toBeInTheDocument()
    
    const columnOption = screen.getByTestId('column-sort')
    userEvent.selectOptions(columnOption, 'population')

    const descendenteOption = screen.getByRole('radio', {  name: /descendente/i})
    userEvent.click(descendenteOption)

    const orderButton = screen.getByRole('button', {  name: /ordenar/i})
    userEvent.click(orderButton)

    expect(screen.getAllByTestId('planet-name')).toHaveLength(8)
    // expect(hoth).not.toBeInTheDocument()
  })
  test('testando filtro igual a', async () => {
    const inputColumn = screen.getByTestId('column-filter');
    const inputComparison =screen.getByTestId('comparison-filter')
    const inputValue = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(inputColumn, 'rotation_period')
    userEvent.selectOptions(inputComparison, 'igual a')
    userEvent.type(inputValue, '24')
    userEvent.click(buttonFilter)

    expect(screen.getAllByTestId('planet-name')).toHaveLength(3)
  })
});

