import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
    mutation loginUser($email: String!, password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser(username: $username, $email: String!, password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                 _id
            }
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation saveBook($input: savedBook!) {
        saveBook(input: $input) {
        _id
        username
        email
        bookCount
            savedBooks {
                # _id
                bookId
                authors
                title
                description
                link
                image
            }
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
            savedBooks {
                # _id
                bookId
                authors
                title
                description
                link
                image
            }
        }
    }
`;