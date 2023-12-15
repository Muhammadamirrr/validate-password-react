import { render, fireEvent, waitFor, screen, within } from '@testing-library/react';
import Form from '../components/Form';
import '@testing-library/jest-dom/extend-expect';

describe('Form component', () => {
  it('should display validation errors other than mismatch error for incorrect password', async () => {
    render(<Form />);

    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(passwordInput, { target: { value: 'weak' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'weak' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const formContainer = screen.getByTestId('errors-container');
      const errorMessages = within(formContainer).getAllByText(/Password/);
      expect(errorMessages).toHaveLength(4);
    });
  });

  it('should display success message for correct password', async () => {
    render(<Form />);

    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(passwordInput, { target: { value: 'StrongPwd1!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'StrongPwd1!' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const successMessage = screen.getByText('Success', { exact: false });
      expect(successMessage).toBeInTheDocument();
    });
  });

  it('should display error for mismatched passwords', async () => {
    render(<Form />);

    const passwordInput = await screen.findByPlaceholderText('Password');
    const confirmPasswordInput = await screen.findByPlaceholderText('Confirm Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(passwordInput, { target: { value: 'Password1!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password1!@' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const formContainer = screen.getByTestId('errors-container');
      const errorMessages = within(formContainer).getAllByText(/Password/);
      expect(errorMessages).toHaveLength(1);
    });
  });
});
