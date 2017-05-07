const path = require('path');
const express = require('express');
const fs = require('fs');
const xml = require('xml2js');
const expressVue = require('express-vue');
const VueAsyncData = require('vue-async-data')

// use globally
// you can also just use `VueAsyncData.mixin` where needed
const app = express();
const router = express.Router()
app.set('views', path.join(__dirname, '/app/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/app/views/components'),
    defaultLayout: 'layout'
});
app.engine('vue', expressVue);
app.set('view engine', 'vue');

var pageTitle = 'Golf score';
var parser = new xml.Parser();
var course = 'Loading ...';
var player;
var holes = [];
fs.readFile(__dirname + '/input/2017-04-30_14.33.51_Amstelborgh Amsterdam Golf Club.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
      course = result.Scorecard.Course[0].CourseName[0];
      player = result.Scorecard.Player;
      holes = result.Scorecard.Course[0].CourseHole;
      console.log(result.Scorecard.Course[0].CourseHole);
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

app.get('/', function(req, res) {
    res.render('main', {
        data: {
            title: pageTitle,
            course: course,
            holes: holes
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
            components: ['holes', 'course'],
            mixins: [exampleMixin]
        }
    });
});

app.get('/holes/:holeNumber', function(req, res){
    var hole = holes.filter(function(item) {
        return item.HoleNumber[0] === req.params.holeNumber;
    })[0];
    res.render('hole', {
        data: {
            hole: hole
        }
    });
});
app.listen(3000);
console.log('Express server listening on port 3000');
