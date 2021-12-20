import React from 'react';

const DisplayForm = ({ formData }) => {
  const { name, age, email } = formData;

  return (
    <section>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </section>
  );
};

export default DisplayForm;
