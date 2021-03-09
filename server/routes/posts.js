import express from 'express';
import {getPosts , createPost} from '../controller/posts.js';

const app = express();
const router = app.Router();

router.get('/' , getPosts);

router.post('/' , createPost) ;

export default router;