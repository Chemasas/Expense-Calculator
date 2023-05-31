import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($profileId: ID!, $expenses: String!) {
    addExpense(profileId: $profileId, expenses: $expenses) {
      _id
      name
      expenses
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_EXPENSE = gql`
  mutation removeExpense($expense: String!) {
    removeExpense(expense: $expense) {
      _id
      name
      expenses
    }
  }
`;
