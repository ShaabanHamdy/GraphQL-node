import { GraphQLString } from "graphql";
import { NoteType, UserType } from "../TypeDefs/schema.types.js";
import { userModel } from "../../DB/models/user.model.js";
import noteModel from "../../DB/models/note.model.js";



export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        mobile: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        let { name, email, mobile, password } = args
        return await userModel.create({ name, email, mobile, password })
    }
}
// ====================================================
export const CREATE_NOTE = {
    type: NoteType,
    args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        let { title, description } = args
        return await noteModel.create({ title, description })
    }
}
// ===========================================================

export const DELETE_NOTE = {
    type: UserType,
    args: {
        id: { type: GraphQLString }
    },
    resolve: async (parent, args) => {
        let { id } = args
        return await noteModel.deleteOne({ _id: id })
    }
}


