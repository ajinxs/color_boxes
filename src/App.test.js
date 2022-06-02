import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

  test('renders App component', () => {
    render(<App/>);
  });

  test('render App with number 5', () => {
    render(<App />);
    const numberFive = screen.getByText(5);
    expect(numberFive).toBeInTheDocument();
  });

  test('HelloWorld should not exist in the document', () => {
    render(<App/>);
    expect(screen.queryByText(/HelloWorld/)).not.toBeInTheDocument();
  });

  test('check that test id exist', () => {
    render(<App/>);
    const testId = screen.getByTestId("box_one")
    expect(testId).toBeInTheDocument();
  });

});