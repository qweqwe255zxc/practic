import './App.css'
import Form from './assets/components/Form/Form.jsx';
import Table from './assets/components/Table/Table.jsx'
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([]);

  return (
    <>
      <Form setData={setData} />
      <Table data={data} />
    </>
  );
};

export default App;