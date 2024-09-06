import express from 'express';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import productoRouter from './routes/products.js';
import { sequelize } from './db/db.config.js';
import { User } from './users/entities/User.entity.js'; 
import { Post } from './posts/entities/Post.entity.js';
import bodyParse  from 'body-parser';


const app = express();

app.use(express.json());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}))

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hey world!');
});

// END POINT: users
app.use('/users', userRouter);

// END POINT: posts
app.use('/posts', postRouter);

// END POINT: products
app.use('/productos', productoRouter);

try{

  User.hasMany(Post, { foreignKey: 'userId' }); 
  Post.belongsTo(User, { foreignKey: 'userId' });

  //await sequelize.authenticate();
  await sequelize.sync({ force: false });
  console.log('Connection with DB stablished'); 
} catch(error) { 
  console.log('DB not connected', error); 
}

export default app.listen(PORT | 3000, () => {
  console.log(`Server listening on port ${PORT}`);
}); 