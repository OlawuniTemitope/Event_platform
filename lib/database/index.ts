import { error } from 'console';
import mongoose from 'mongoose';

const MONGODB_URI=process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn:null, Promise:null}
export const connectedToDatabase= async ()=>{
if(cached.conn) return cached.conn;

if(!MONGODB_URI) throw new Error('MONGODB_URI is missing')

cached.Promise=cached.Promise  || mongoose.connect(MONGODB_URI,{
    dbName:'Evently',
    bufferCommands:false,
})
cached.conn =await cached.Promise
return cached.conn
}

