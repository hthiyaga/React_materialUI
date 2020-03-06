import React, { Fragement, useState, Fragment } from 'react';
const Page = () => {
  const [formData, setFormData] = useState('');

  const [items, setitems] = useState(['messi', 'ronaldo']);

  const onSubmit = async e => {
    e.preventDefault();
    setitems([...items, formData]);
    setFormData('');
  };
  return (
    <Fragment>
      <div>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            name='addtodo'
            value={formData}
            onChange={e => setFormData(e.target.value)}
            required
          />
          <button type='submit'>Add</button>
        </form>
        {items.map((item, index) => (
          <div>{item}</div>
        ))}
      </div>
    </Fragment>
  );
};

export default Page;
