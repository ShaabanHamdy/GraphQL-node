import { GraphQLList } from "graphql";
import { NoteType, UserType } from "../TypeDefs/User.js";
import { userModel } from "../../DB/models/user.model.js";
import productModel from "../../DB/models/product.model.js";


export const GET_USERS = {
    type: new GraphQLList(UserType) , 
    resolve:()=>{
        return userModel.find()
    }
}
// ===========================================
export const GET_NOTES = {
    type: new GraphQLList(NoteType) , 
    resolve:()=>{
        return productModel.find()
    }
}