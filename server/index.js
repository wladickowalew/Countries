let express = require("express"), app = express();
let bodyParser = require("body-parser");
let urlParser = bodyParser.urlencoded({extended: false});
let mc = require("mongodb").MongoClient, url = "mongodb://localhost";
let db;

app.use(express.static("../client"));

mc.connect(url, function(err, client){
	if (err) console.log(err.stack);
	db = client.db("countries");
	app.listen(8000);
	getArray();
});

function getArray(){
	db.collection("areas").find({}).toArray(
		function(err, doc){
			if (err) console.log(err.stack)
			for (country of doc){
				console.log(country.name, country.area, country.en)
			}
		});
}
