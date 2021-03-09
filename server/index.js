import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyparser.json({limit : "30mb" , extended : true}));
app.use(bodyparser.urlencoded({limit : "30mb" , extended : true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://SubhangProject:expressCors@nostalgiacluster0.cfl7a.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL , {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => app.listen(PORT , ()=> console.log(`server running on ${PORT}`)))
.catch((error)=> console.log(error.message)); 

mongoose.set('useFindAndModify' , false);


