import {  GraphQLObjectType, GraphQLString } from "graphql";


export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        mobile: { type: GraphQLString },
        password: { type: GraphQLString },

    })
})


export const NoteType = new GraphQLObjectType({
    name: "Note",
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString },

    })
})



