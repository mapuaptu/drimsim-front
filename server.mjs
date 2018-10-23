import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`./user_app`));

app.get('/', (req, res) => {
  res.sendFile(`./user_app/index.html`);
});

app.listen(port, () => {
  console.log(`app start - OK on port ${port}`);
});
