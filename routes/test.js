/**
 * Created by Administrator on 2017/1/11.
 */
var express = require('express');
var router = express.Router();
var novelThief=require('../lib/novelThief');

/* GET home page. */
/*router.get('/', function(req, res, next) {
   novelThief.getPageHtml('http://www.qu.la',function(data){
        res.send(data);
    })
});*/
/*router.get('/', function(req, res, next) {
    novelThief.getAllNovelUrl(function(arr){
        res.send(arr.join(','));
    })
});*/
/*router.get('/', function(req, res, next) {
    novelThief.getNovelInfo('http://www.qu.la/book/83/',function(novel){
        res.send(JSON.stringify(novel));
    })
});*/
/*router.get('/', function(req, res, next) {
    novelThief.getSection('http://www.qu.la/book/83/69739.html',function(content){
        res.send(JSON.stringify(content));
    })
});*/
router.get('/', function(req, res, next) {
    novelThief.getAllNovel();
});
module.exports = router;