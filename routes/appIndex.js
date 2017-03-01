/**
 * Created by Administrator on 2017/1/14.
 */
var express = require('express');
var router = express.Router();
var db = require('../lib/db');
/* GET home page. */
router.get('/', function(req, res, next) {
    var page=new Number(req.query.page||1);
    var rows=12;
    var searchTxt=req.query.searchTxt||'';
    var reg=new RegExp('.*'+searchTxt+'.*');
    //分类查询
    var category=req.query.category||'';
    var regCategory=new RegExp(category);
    var query={name:reg,category:regCategory};
    //得到总数
    db.count('novels',query,function(total){
        //判断是否需要下一步按钮
        var isNextPage=page*rows<total;
        db.find(
            'novels',
            query,
            {
                fields:{
                    name:1,
                    author:1,
                    description:1,
                    imgUrl:1
                },
                sort:{
                    lastUpdateTime:-1
                },
                limit:rows,
                skip:(page-1)*rows
            },
            function(err,cols){
                //.render将数据绑定
                //res.send(JSON.stringify(cols));
                res.render('appIndex',{searchTxt:searchTxt, category: category,isNextPage:isNextPage,page:page,rows:cols});
            }
        );

    });

});

module.exports = router;

