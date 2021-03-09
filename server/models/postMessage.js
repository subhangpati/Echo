import mongoose from 'mongoose';

const postShema = mongoose.Schema({
    title : String ,
    message : String ,
    creator : String ,
    tags : [String], 
    selcetedFile : String ,
    likeCount : {
        type : Number ,
        default : 0
    },
    createdAt : {
        type : Date , 
        default : new Date()
    }
});


const PostMessage = mongoose.model('PostMessage' , postShema);
//we will be able to carry out our operation on this model 

export default PostMessage ;