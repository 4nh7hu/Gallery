var express = require('express');
var router = express.Router();

/* GET home page. */

    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });



router.post('/login', function(req, res, next) {
    //req sẽ có body, thì mọi info dc lưu trong body
    var info_sent=req.body;
    console.log(req.body);
    req.pool.getConnection( function(err,connection) {
            if (err) {
                res.sendStatus(500);
                return;
            }
        var query = "SELECT * FROM USERS WHERE Username = ?"; //dòng lệnh lấy thông tin
            connection.query(query, [req.body.username],function(err, rows, fields) {
                connection.release(); // release connection
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                console.log(rows);

                if (rows.length > 0) {
                //compare password
                    if (info_sent.password===rows[0].Password) {
                        var data_sent={
                            redirectPath: '/index.html',
                            username: rows[0].Username,
                            user_id: rows[0].userID
                        };

                        //set session
                        req.session.user=rows[0].userID;
                        console.log(data_sent);

                        res.send(data_sent);
                    } else {
                        //error unauthorized access
                        res.sendStatus(401);
                    }
            } else {
                //error unauthorized access
                res.sendStatus(401);
            }
            });
        });
});



    // router.get('/detail', function(req, res, next) {
    //         req.pool.getConnection( function(err,connection) {
    //             if (err) {
    //                 res.sendStatus(500);
    //                 return;
    //             }
    //         var query = "select * from ARTWORK WHERE artworkID = 1"; //dòng lệnh lấy thông tin
    //                 connection.query(query, function(err, rows, fields) {
    //                 connection.release(); // release connection
    //                 if (err) {
    //                     res.sendStatus(500);
    //                     return;
    //                 }
    //                 console.log(rows);
    //                 //thông tin lấy từ database được lưu trong biến "rows"
    //                 res.send(rows); //send response

    //             });
    //         });
    //     });

        router.get('/history', function(req, res, next) {
            //Connect to the database
            req.pool.getConnection( function(err,connection) {
                    if (err) {
                        res.sendStatus(500);
                        return;
                    }
                    var query = "select * from HISTORY"; //dòng lệnh lấy thông tin
                            connection.query(query, function(err, rows, fields) {
                            connection.release(); // release connection
                            if (err) {
                                res.sendStatus(500);
                                return;
                            }
                            console.log(rows);
                            //thông tin lấy từ database được lưu trong biến "rows"
                            res.send(rows); //send response

            });
        });
    });


// router.post('/signup', function(req, res, next) {
//         var query = "insert into USERS values(NULL,?,?)"; //dòng lệnh lấy thông tin
//             connection.query(query, function(err, rows, fields) {
//                 connection.release(); // release connection
//                 if (err) {
//                     res.sendStatus(500);
//                     return;

//         var signup_sent=req.body;
//         console.log(signup_sent);
//         if(signup_sent.username===acount.username && signup_sent.password===account.password){
//             console.log("Successfully signed up");
//             res.send("Successfully signed up");
//         } else {
//             console.log("Sign up failed :(");
//             res.send("Sign up failed :(");
//         }
// };
// });

        router.get('/detail', function(req, res, next) {
            console.log("check if router works");
            res.send("Title: 5K Poster, Process: 1 hour, Day made: Jun 28, Artist: Anonymous, Genre: Cover");

        });

        router.get('/detail2', function(req, res, next) {
            console.log("check if router works");
            res.send("Title: Bài dụ, Process: 3 day, Day made: Jul 17, Artist: TKKT 3, Genre: Poster");

        });





module.exports = router;