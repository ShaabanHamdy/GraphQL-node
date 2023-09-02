import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_NOTES, GET_USERS } from "./Queries/User.js";
import { CREATE_NOTE, CREATE_USER, DELETE_USER } from "./Mutations/User.js";


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_USERS,
        getNotes: GET_NOTES
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        create_user: CREATE_USER,
        create_note: CREATE_NOTE,
        delete_user:DELETE_USER
    }
})




export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})
