import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ExpenseForm = ({ profileId }) => {
  const [expenses, setExpense] = useState('');
  const [amount, setAmount] = useState('');


  const [addExpenses, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addExpenses({
        variables: { profileId, expenses },
      });

      setExpense('');
      setAmount('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add some expenses</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Enter some expenses..."
              value={expenses}
              className="form-input w-100"
              onChange={(event) => setExpense(event.target.value)}
            />
            
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add Expenses
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add expenses. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ExpenseForm;
