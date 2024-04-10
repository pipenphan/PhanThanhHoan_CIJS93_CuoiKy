import React from 'react';
import { Tabs } from 'antd';
import Task from './components/Task';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'All',
    children: <Task />
  },
  {
    key: '2',
    label: 'Active',
    children: <Task />
  },
  {
    key: '3',
    label: 'Completed',
    children: <Task />
  },
];
const App = () =>
  <>
    <h1>#todo</h1>
    <Tabs centered size='large' defaultActiveKey="1" items={items} onChange={onChange}/>;
  </>
export default App;