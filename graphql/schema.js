import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_NOTES, GET_USERS } from "./Queries/queries.operations.js";
import { CREATE_NOTE, CREATE_USER, DELETE_NOTE, UPDATE_NOTE } from "./Mutations/mutation.operations.js";


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
        delete_note: DELETE_NOTE,
        update_note: UPDATE_NOTE
    }
})




export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})
