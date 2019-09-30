import express from 'express';
import ejs from 'ejs';
import path from 'path';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webpackOptions from '../../webpack.config';

const port = process.env.PORT || 3000;
let app = express();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackOptions);
  app.use(middleware(compiler, { publicPath: '/js' }));
}

app.use('/js', express.static(path.join(__dirname, '../client/js')));
app.use('/css', express.static(path.join(__dirname, '../client/css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Listening on port: ${port}`);
});
