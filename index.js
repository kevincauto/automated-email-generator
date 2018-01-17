const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();
const port = 8000;

const url = 'https://cdeworld.com/webinars/20887-The_Digital_Implant_Workflow:A_Team_Approach_for_Success';

request(url, function (err, res, body) {
    const $ = cheerio.load(body);
    const title = $('#articlecontent h1').text();
    const dates = $("#articlecontent h3").first().text();
    const presenter = $('#articlecontent h2.authors').text();
    const provider = $('.ce-rec-med-partner strong').text();
    const supporter = $('.ce-rec-med-partner em').last().text();
    const cost = $('.ce-rec-sm-R strong').text();
    const credits = $('.ce-rec-sm-L strong').text();
    const description = $('.abstract p').text();
    const lo1 = $('.learning_objectives li').first().text();
    const lo2 = $('.learning_objectives li').next().text();
    const lo3 = $('.learning_objectives li').last().text();
    const disclosure = $('.disclosures p').first().text().replace(/\n/g, '').replace(/\t/g, '');
    const link = url;
    const imgLink = ''

    const obj = {
        title,
        dates,
        presenter,
        provider,
        supporter,
        cost,
        credits,
        description,
        lo1,
        lo2,
        lo3,
        disclosure,
        link,
        imgLink
    }

    console.log(obj)
});

require('./routes/linkRoute')(app);

app.listen(port, function () {
    console.log('app listening on port' + port);
})