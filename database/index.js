
const mongoose = require('mongoose');
require('dotenv').config();

const databaseURL = process.env.MONGO_URI || 'mogodb://localhost/';

console.log(databaseURL)

mongoose.connect(databaseURL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, err => {
		if (err) throw err;
		console.log('Connected to MongoDB!!!')
	})
mongoose.Promise = global.Promise;

module.exports = mongoose;