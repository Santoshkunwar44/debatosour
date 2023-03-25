const express = require("express")
const app = express()
const session = require("express-session")
const MongoStore = require("connect-mongo");
const passport = require("passport");
const cookieParser = require("cookie-parser")

const cors = require("cors")
require("dotenv").config()



app.set('trust proxy', 1) // trust first proxy

app.use(cors({
    origin: [
        process.env.FRONTEND_URL,
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    methods: ['POST', 'PUT', 'DELETE', 'OPTIONS', 'GET'],
    credentials: true
}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
app.set('trust proxy', 1) // trust first proxy


require("./utils/db")()
require("./utils/passport")
app.use(cookieParser())

const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: "session_user",
    ttl: 31556952000,
    autoRemove: 'native',
})


app.use(session({
    name: "debatosour.sid",
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store,
    cookie: {
        secure: false,
        maxAge: 31556952000,
        httpOnly: true,
    },
}))
// middlewares
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())


require("./AllRoutes")(app)

app.listen(8000, () => console.log(`server started at port 8000`))
