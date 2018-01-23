const express = require('express');
const app = express();

const port = 5000

// Making public folder to static and used directly from browser.
app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
//app.set('view engine', 'jade');

const handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}))
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
	// {list: ['a', 'b', 'c']}, this is behave like locasls(Rails)
	// We will directly access `list` variable in `index` template
	res.render("index", {title: 'Hello from render',list: ['a', 'b', 'c']});
});


app.get('/books', (req, res) => {
	res .send("Hello Books!!");
});

app.listen(port, (err) => {
	console.log('Running server on port ' + port);
});