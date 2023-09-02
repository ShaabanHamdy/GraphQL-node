import {  GraphQLString } from "graphql";
import { NoteType, UserType } from "../TypeDefs/User.js";
import { userModel } from "../../DB/models/user.model.js";
import productModel from "../../DB/models/product.model.js";



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
        return await productModel.create({ title, description })
    }
}
// ===========================================================

export const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLString }
    },
    resolve: async (parent, args) => {
        let { id } = args
        return await userModel.deleteOne({_id:id})
    }
}


