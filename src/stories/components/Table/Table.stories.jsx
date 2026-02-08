import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
   tags: ['autodocs'],
};

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
];

const data = [
  { id: 1, name: "Srinivas", email: "sri@mail.com" },
  { id: 2, name: "Ravi", email: "ravi@mail.com" },
];

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
};

export const EmptyTable = Template.bind({});
EmptyTable.args = {
  columns,
  data: [],
};
