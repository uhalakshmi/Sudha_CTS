var express = require('express')
var multer = require('multer');
var uploads = multer({ dest: "uploads/" });
var app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use("/uploads", express.static("uploads"));
// uploads\653d4f98e11bdffac731b9f9c0761121
app.get("/", function (req, res) {
    return res.send("Welcome to my home page");
})
app.post("/upload", uploads.single("profileImg"), function (req, res) {
    let { body, params, query, file, files } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    console.log("file: ", file);
    console.log("files: ", files);
    // return res.send("profile is uploaded successfull");
    res.render("profile.ejs", { req, res });
})

app.listen(5005, function (err, result) {
    if (err) {
        console.log("Error occured while starting application");
    }
    if (!err) {
        console.log("Application is started successfully and running on port 5005");
    }
})