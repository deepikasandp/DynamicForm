import type { Meta, StoryObj } from '@storybook/react';
import DynamicForm from './DynamicForm';
import mockConfigSetOne from '../../tests/mockData/mockConfig1.json';
import mockConfigSetTwo from '../../tests/mockData/mockConfig2.json';
import mockObject from '../../tests/mockData/mockObject.json';

const meta: Meta<typeof DynamicForm> = {
  title: 'Components/DynamicForm',
  component: DynamicForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    config: mockConfigSetOne,
    object: mockObject,
  },
};

export const AlternateConfig: Story = {
  args: {
    config: mockConfigSetTwo,
    object: mockObject,
  },
};
