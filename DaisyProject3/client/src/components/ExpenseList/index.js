import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_EXPENSE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const ExpenseList = ({ expenses, isLoggedInUser = false }) => {
  const [removeExpense, { error }] = useMutation(REMOVE_EXPENSE, {
    update(cache, { data: { removeExpense } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeExpense },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveExpense = async (expenses) => {
    try {
      const { data } = await removeExpense({
        variables: { expenses },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!expenses.length) {
    return <h3>No Expenses listed</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {expenses &&
          expenses.map((expenses) => (
            <div key={expenses} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{expenses}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveExpense(expenses)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ExpenseList;
