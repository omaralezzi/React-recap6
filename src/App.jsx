import { useState } from 'react';

import Form from './components/Form';
import Error from './components/Error';
import DisplayForm from './components/DisplayForm';

import './App.css';

const App = () => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.name !== '' && formData.age !== '' && formData.email !== '') {
      setSubmit(true);
      setError('');
    } else {
      setError('Oops you have errors');
    }
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setFormData({ name: '', age: '', email: '' });
    setSubmit(false);
    setError('');
  };

  return (
    <main>
      <h1>Please enter your details</h1>
      <div>
        <Form
          formData={formData}
          submit={submitHandler}
          change={changeHandler}
          reset={resetHandler}
        />
        {submit && <DisplayForm formData={formData} />}
        {error && <Error error={error} />}
      </div>
    </main>
  );
};

export default App;
