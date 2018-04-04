/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser($name: String!, $ciudad:String!) {
    addUser(name: $name) {
      id
      name
      ciudad
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      name
      ciudad
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
      ciudad
    }
  }`;

export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!, $ciudad:String!) {
    updateUser(id: $id, name: $name, ciudad: $ciudad) {
      id
      name
      ciudad
    }
  }`;