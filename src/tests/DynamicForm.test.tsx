import { render, screen, fireEvent } from '@testing-library/react';
import DynamicForm from '../components/DynamicForm';
import mockConfig from '../tests/mockData/mockConfig.json';
import mockObject from '../tests/mockData/mockObject.json';

describe('DynamicForm Component', () => {
  describe('Rendering Tests', () => {
    test('renders fields based on config', () => {
      render(<DynamicForm config={mockConfig} object={mockObject} />);
  
      expect(screen.getByLabelText('Driver Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Vehicle Trade Value')).toBeInTheDocument();
    });
  });

  describe('Input Handling Tests', () => {
    test('handles input change for text field', () => {
      render(<DynamicForm config={mockConfig} object={mockObject} />);
  
      const driverNameInput = screen.getByLabelText('Driver Name');
      
      fireEvent.change(driverNameInput, { target: { value: 'James Bond' } });
      
      expect((driverNameInput as HTMLInputElement).value).toBe('James Bond');
    });

    test('updates value in currency input', () => {
      render(<DynamicForm config={mockConfig} object={mockObject} />);

      const amountInput = screen.getByLabelText('Value');
      fireEvent.change(amountInput, { target: { value: '5000' } });

      expect((amountInput as HTMLInputElement).value).toBe('5000');
    });
  });

});
