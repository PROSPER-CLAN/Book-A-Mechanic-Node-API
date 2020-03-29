import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';


// Configure .env
dotenv.config();
const app = express();

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const PORT = process.env.PORT || 4000;

// routes
app.get('/', (req, res) => {
  return res.json('Welcome to Mechanic Booking App Node API');
})


app.listen(PORT, () => {
  console.log(`Server runing on PORT ${PORT} visit http://localhost:${PORT}`);
});

export default app;