import { gql } from 'graphql-tag';


export const ME_QUERY = gql`
  query Me {
    me {
      id
      fullName
    }
  }
`


export const SIGN_IN_MUTATION = gql`
  mutation SignMeIn($email: String!) {
    signIn(email: $email){
      token
      user {
        id
        fullName
      }
    }
  }
`