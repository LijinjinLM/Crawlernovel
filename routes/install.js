var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');
var db=require('../lib/db');

router.get('/', function(req, res, next) {
    db.remove('admins',{},function(){
    });
    db.insert('admins',{loginId:'admin',loginPass:'123456'},function(err,cols){
        res.send('初始化成功');
    });
//    db.find('admins',{},{},function(err,cols){
//        db.insert('admins',{loginId:'huanglulu',loginPass:'huanglulu'},function(){
//        res.send(JSON.stringify(cols));
//    });
//    });
    //增加数据
    //连接数据库
//    var server = new mongodb.Server("127.0.0.1",27017,{});
//        var db=new mongodb.Db('novel',server,{});
//        db.open(function(error,db){//数据库：mongotest
//            if(error) throw error;
//            db.collection('class',{safe:true}, function(err, collection){
//                if(err){
//                    console.log(err);
//                }else{
////                collection.insert({
////                   name:'凌娟',
////                   sex:'女',
////                   id:'lj',
////                   password:'88888888'
////              });
//
////                    var ObjectID = require('mongodb').ObjectID;
////                    collection.find({sex:'女'}).toArray(function(errfind,cols){
////                        res.send(JSON.stringify(cols));
////                    });
//                    // collection.remove({_id:ObjectID('587366afcc7b492acc18a5fa')});
//                }
 //           });
//        db.collection('admins',{safe:true}, function(err, collection){
//            if(err){
//                console.log(err);
//            }else{
//                //增
////                collection.insert({
////                    loginId:'bbb',
////                    loginPass:'123456'
////                });
//                //查
//                var ObjectID = require('mongodb').ObjectID;
//                collection.find({loginId:{$regex:'ad'}}).limit(5).skip(2).toArray(function(errfind,cols){
//                    res.send(JSON.stringify(cols));
//                });
//               // 增
////                 collection.insert({
////                     loginId:'admin2',
////                     loginPass:'123456'
////                 });
//                //删
//             collection.remove({_id:ObjectID('587308a5379a990e804567bd')});
////
////
////                //改，一般第二个参数是查询出来的对象作为修改值递进去
////                collection.update(
////                    {_id:ObjectID('5872ffa1d692371368269591')},
////                    {
////                        loginId:'admin888',
////                        loginPass:'654321'
////                    }
////                );
//            }
//        });
  //  });
});

module.exports = router;