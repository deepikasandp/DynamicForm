import type { Meta, StoryObj } from '@storybook/react';
import StaticForm from './StaticForm';
import mockObject from '../../tests/mockData/mockObject.json';

const meta: Meta<typeof StaticForm> = {
  title: 'Components/StaticForm',
  component: StaticForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    object: mockObject,
  },
};
