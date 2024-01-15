import { Document, Schema, model, models } from "mongoose";
export interface ICategory extends Document{
_id:string,
name:string
}
const CategorySchema=new Schema ({
    name:{type:String,require:true,unique:true}
})

const Category = models.category || model('category',CategorySchema)
export default Category