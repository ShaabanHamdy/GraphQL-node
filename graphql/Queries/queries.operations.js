import { GraphQLList } from "graphql";
import { NoteType, UserType } from "../TypeDefs/schema.types.js";
import { userModel } from "../../DB/models/user.model.js";
import noteModel from "../../DB/models/note.model.js";


export const GET_USERS = {
    type: new GraphQLList(UserType),
    resolve: () => {
        return userModel.find()
    }
}
// ===========================================
export const GET_NOTES = {
    type: new GraphQLList(NoteType),

    resolve: () => {
        return noteModel.find()
    }
}

