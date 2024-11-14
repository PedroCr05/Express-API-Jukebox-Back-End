const dotenv = require(`dotenv`);
dotenv.config();
const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const cors = require(`cors`);

const jukeboxRouter = require(`./controller/jukeboxController.js`);
app.use(cors({ origin: `*` }));

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on(`connected`, () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

app.use(`/tracks`, jukeboxRouter);

app.listen(3000, () => {
  console.log(`The express app is ready!`);
});
