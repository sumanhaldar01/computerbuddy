const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const bodyPerser = require("body-parser");
const fu= require("express-fileupload");

const dbConfig = require("./app/config/db.config");
const java = require("./app/routes/Java");
const python= require("./app/routes/Python");
const c = require("./app/routes/c");


const app = express();
const corsOptions ={
  origin: 'http://localhost:4200', // Corrected URL
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOptions));




app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "Auth-session",
    keys: ["COOKIE_SECRET"], 
    httpOnly: true
  })
);

const db = require("./app/models");
const Role = db.role;


db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
 app.get("/", (req, res) => {
  res.json({ message: "Welcome to Auth application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });
   }
   });
}
app.use(express.static('public'));
// app.use(cors());
app.use(fu());

// parse application/x-www-form-urlencoded
app.use(bodyPerser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyPerser.json());

app.get("/",(req,res)=>{
    res.send("hello Express");
});

const webpageContent = [
  { id: 1, title: 'java', description: 'Learn Java from basic to advance' },
];

app.use(bodyPerser.json());

app.get('/search', (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: 'Search query is required.' });
  }

  const searchResults = webpageContent.filter(content =>
    content.title.toLowerCase().includes(query.toLowerCase())
  );

  res.json({ results: searchResults });
});

app.use("/java",java);
app.use("/python",python);
app.use("/c",c);
