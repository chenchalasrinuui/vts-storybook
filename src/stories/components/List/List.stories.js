
import { List } from './List';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/List',
  component: List,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ListWithItems = {
  args: {
    items: ["sachin",'Dhoni'],
  },
};

export const ListWithoutItems = {
  args: {
    items: []
  },
};
