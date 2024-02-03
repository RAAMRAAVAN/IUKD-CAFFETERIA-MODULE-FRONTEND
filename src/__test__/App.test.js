import { render, screen } from '@testing-library/react';
import App from '../App';

test('render Course Finder', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Course Finder/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Course Found', () => {
  render(<App />);
  const linkElement = screen.getByText(/Course Found/i);
  expect(linkElement).toBeInTheDocument();
});

test("render buttons",async ()=>{
  render(<App/>);
  const submitButton= await screen.findAllByRole("button");
  console.log("msg",submitButton);
  expect(submitButton).toHaveLength(3);
});

test('renders Course input', () => {
  render(<App />);
  const linkElement = screen.getByText(/Courses/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Child Subject input', () => {
  render(<App />);
  const linkElement = screen.getByText(/Child Subject/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders self placed check box', () => {
  render(<App />);
  const element = screen.getByTestId('selfplaced')
  // console.log();
  expect(element).toBeDefined;
});

