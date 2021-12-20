import React from 'react';

const Form = ({ formData, submit, reset, change }) => {
  const { name, age, email } = formData;

  return (
    <form>
      <input
        type='text'
        required
        onChange={(e) => change(e)}
        name='name'
        value={name}
        placeholder='Name'
      />
      <input
        type='text'
        required
        onChange={(e) => change(e)}
        name='age'
        value={age}
        placeholder='Age'
      />
      <input
        type='email'
        required
        onChange={(e) => change(e)}
        name='email'
        value={email}
        placeholder='Email'
      />

      <button onClick={(e) => submit(e)}>Submit</button>
      <button onClick={(e) => reset(e)}>Reset</button>
    </form>
  );
};

export default Form;
