import type { Meta, StoryObj } from '@storybook/react';
import DynamicForm from './DynamicForm';
import configuration from "../../data/configurationToImplement.json";
import { getData } from "../../components/utils";
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
    config: configuration,
    object: getData(),
  },
};

export const AlternateConfig: Story = {
  args: {
    config: mockConfigSetTwo,
    object: mockObject,
  },
};
