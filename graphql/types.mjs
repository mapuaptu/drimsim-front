import Apollo from 'apollo-server-express';
const gql = Apollo.gql;

const typeDefs = gql`
  type Knowledge {
    language: String
    frameworks: [String]
  }

  type User {
    id: ID!
    name: String!
    full_name: String
    age: Int
    city: String
    tag: String
    url: String
    knowledge: [Knowledge]
  }

  type Query {
    user(id: Int!): User!
    allUsers: [User!]!
    totalUsers: Int!
  }

  type Mutation {
    updateUserCity(userID: ID!, city: String!): User
  }
`;

export default typeDefs;
