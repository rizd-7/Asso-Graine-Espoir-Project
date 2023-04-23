const express = require("express");
const { stat } = require("fs");
const app = express();
const path = require("path")

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

/**** */

const mainRoute = require("./routes/main");
app.use(mainRoute);
const aboutUsRoute = require("./routes/aboutUs");
app.use(aboutUsRoute);
const EventsRoute = require("./routes/Events");
app.use(EventsRoute);
const joinUsRoute = require("./routes/joinUs");
app.use(joinUsRoute);
const galleryRoute = require("./routes/gallery");

const port = 3000;

const start =()=>{  
    app.listen(port,()=>{
        console.log(`server is listening to port ${port}`)
    })
}

start();