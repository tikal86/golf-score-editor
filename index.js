const path = require('path');
const express = require('express');
const fs = require('fs');
const xml = require('xml2js');
const expressVue = require('express-vue');

const app = express();
const router = express.Router()
app.set('views', path.join(__dirname, '/app/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/app/views/components'),
    defaultLayout: 'layout'
});
app.engine('vue', expressVue);
app.set('view engine', 'vue');

var users = [];
var pageTitle = 'Golf score';
users.push({ name: 'tobi', age: 12 });
users.push({ name: 'loki', age: 14  });
users.push({ name: 'jane', age: 16  });
var parser = new xml.Parser();
var course, player, text;
fs.readFile(__dirname + '/input/2017-04-30_14.33.51_Amstelborgh Amsterdam Golf Club.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
      course = result.Scorecard.Course;
      player = result.Player;
      text = result.Text;
      console.dir(result);
      console.log('Done');
    });
});

var exampleMixin = {
    methods: {
        hello: function () {
            console.log('Hello');
        }
    }
}
// const mongojs = require('mongojs');

app.get('/', function(req, res){
    res.render('main', {
        data: {
            title: pageTitle,
            course: course.CourseName,
            users: course.holes
        },
        vue: {
            head: {
                title: pageTitle,
                meta: [
                    { property:'og:title', content: pageTitle},
                    { name:'twitter:title', content: pageTitle}
                ],
                structuredData: {
                    "@context": "http://schema.org",
                    "@type": "Organization",
                    "url": "http://www.your-company-site.com",
                    "contactPoint": [{
                        "@type": "ContactPoint",
                        "telephone": "+1-401-555-1212",
                        "contactType": "customer service"
                    }]
                }
            },
            components: ['users', 'course'],
            mixins: [exampleMixin]
        }
    });
});

app.get('/users/:userName', function(req, res){
    var user = users.filter(function(item) {
        return item.name === req.params.userName;
    })[0];
    res.render('user', {
        data: {
            title: 'Hello My Name is',
            user: user
        }
    });
});
app.listen(3000);
console.log('Express server listening on port 3000');
