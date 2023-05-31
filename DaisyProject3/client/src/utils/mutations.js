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
export const ADD_AMOUNT = gql`
  mutation addAmount($profileId: ID!, $amount: String!) {
    addExpense(profileId: $profileId, amount: $amount) {
      _id
      name
      amount
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
  mutation removeExpense($expenses: String!) {
    removeExpense(expenses: $expenses) {
      _id
      name
      expenses
    }
  }
`;
export const REMOVE_AMOUNT = gql`
  mutation removeAmount($amount: String!) {
    removeAmount(amount: $amount) {
      _id
      name
      amount
    }
  }
`;

