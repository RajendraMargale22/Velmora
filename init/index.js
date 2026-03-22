const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

// const MONGO_URL = "mongodb://127.0.0.1:27017/velmora";
const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(MONGO_URL);
};

main().then( () => {
    console.log("Connected to DataBase");
}).catch((err) => {
    console.log(err);
});

const initDB = async () => {
    initData.data =  initData.data.map( (obj) => ({...obj, owner :"69b6a2008a470c6e82151743"}));
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was Initialized")
};

initDB();
