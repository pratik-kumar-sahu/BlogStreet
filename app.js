const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const flash = require('connect-flash');
const mongoStore = require('connect-mongo').default;

const app = express();

// ROUTES & MIDDLEWARES
const articleRouter = require('./routes/articleRoutes');
const userRouter = require('./routes/userRoutes');
const commentRouter = require('./routes/commentRoutes');
const portfolioRouter = require('./routes/portfolioRoutes');
const middleware = require('./middlewares/middlewares');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('./'));
app.use(express.static('./src'));
app.use(methodOverride('_method'));

app.use(
  expressSession({
    secret: 'BlogStreet',
    saveUninitialized: false,
    resave: false,
    store: mongoStore.create({
      mongoUrl:
        'mongodb+srv://backendpro:12334455@@cluster-backend-attainu.6rqij.mongodb.net/usersData?retryWrites=true&w=majority',
      ttl: 1 * 24 * 60 * 60,
    }),
  }),
  middleware.currentUser
);
app.use(flash());

// ARTICLE ROUTES
app.use('/', articleRouter);
app.use('/articles', articleRouter);

// USER ROUTES
app.use('/auth', userRouter);
app.use('/users', userRouter);

// COMMENT ROUTES
app.use('/articles/:id/comments', commentRouter);
app.use('/articles/:id/comments/:id', commentRouter);

// PORTFOLIO ROUTES
app.use('/', portfolioRouter);
app.use('/portfolio', portfolioRouter);

module.exports = app;
