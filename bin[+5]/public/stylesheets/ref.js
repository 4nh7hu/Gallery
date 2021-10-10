
    // create function
    get_markers: function(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let info=JSON.parse(this.responseText);
                    //biến JSON object gửi từ router thành JS Object bằng JSON.parse(this.responseText)
                }
                };
            xhttp.open("GET", "/markers", true);
            xhttp.send();
        },



    router.get('/markers', function(req, res, next) {
        req.pool.getConnection( function(err,connection) {
            if (err) {
                res.sendStatus(500);
                return;
            }



            var query = "select * from MARKERS"; //dòng lệnh lấy thông tin
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



    signup: function()  {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        //do sth here
                        document.getElementById("response").innerHTML=this.responseText;
                    }
                };
                xhttp.open("POST", "/signup_user", true);
                xhttp.setRequestHeader("Content-type", "application/json");
                // xhttp.setRequestHeader("Content-type", "application/text");
                xhttp.send(JSON.stringify(this.account));
            }
       }





