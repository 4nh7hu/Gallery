var a=new Vue({
    el:"#web",
    data: {
        // selected_service: 'profile',
        selected_service: 'home_page',
        selected_service2: 'profile',

        person: {
                username: 'USERNAME',
                name: '',
                dob: '',
                expo: ''
        },

        account: {
            username:'',
            password:''
        },

        artwork:{
            title:'5K Poster',
            process:'1 hour',
            day_made:'Jun 28',
            artist:'Anonymous',
            genre:'Poster'
        },
        
                //  history: {
        //      title:'',
        //      artist:'',
        //      genre:''
        //  }


        title: ["Title", "Process", "Day_made", "Artist","Genre"],
        info: [
            {Title:"5K Poster", Process:"1hr", Day_made:"Jun 28", Artist:"Thu", Genre:"Cover"},
            {Title:"Bài dụ", Process:"3d", Day_made:"Jul 16", Artist:"TKKT 3", Genre:"Poster"},
            {Title:"Bài nhắc", Process:"3d", Day_made:"Jul 16", Artist:"TKKT 3", Genre:"Poster"},
            {Title:"Bài poster", Process:"4d", Day_made:"Jul 16", Artist:"TKKT 3", Genre:"Poster"},
            {Title:"fish who grew legs", Process:"3h", Day_made:"May 30", Artist:"Anonymous", Genre:"Painting"},
            {Title:"cover photo", Process:"2hr", Day_made:"Sep 8", Artist:"Anonymous", Genre:"Cover"},
            ],


    },

    methods:{

    login: function()  {
            var _this=this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status < 400) {
                        var info_received=JSON.parse(this.responseText);
                        _this.selected_service="home_page";
                } else if (this.readyState == 4 && this.status >= 400) {
                    document.getElementById("login_failed").innerHTML="Login failed!";
                }
            };
            xhttp.open("POST", "/login", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(this.account));
        },


        get_history: function() {
            var xhttp = new XMLHttpRequest();
            var this_data=this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //do sth here
                    this_data.history=JSON.parse(this.responseText);
                    document.getElementById("history").innerHTML=this_data.history;
                    // this_data.history.title=info[0].Title;
                    // this_data.history.artist=info[0].Artist;
                    // this_data.history.genre=info[0].Genre;

                }
            };
            xhttp.open("GET", "/history", true);
            xhttp.send();
        },

        get_artwork: function()  {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // text responsed từ router là "APPLE"
                    //do sth here after receiving results
                    document.getElementById("artworkdetail").innerHTML=this.responseText;
                    //dùng responseText để lấy data gửi từ router tới
                }
            };
            xhttp.open("GET", "/detail", true);
            xhttp.send();
        },

            get_artwork2: function()  {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // text responsed từ router là "APPLE"
                    //do sth here after receiving results
                    document.getElementById("artworkdetail2").innerHTML=this.responseText;
                    //dùng responseText để lấy data gửi từ router tới
                }
            };
            xhttp.open("GET", "/detail2", true);
            xhttp.send();
        },

    }

});

        //     get_artwork: function() {
        //         var _this=this;
        //         var xhttp = new XMLHttpRequest();
        //         xhttp.onreadystatechange = function() {
        //             if (this.readyState == 4 && this.status == 200) {
        //                 var info=JSON.parse(this.responseText);
        //                 _this.artwork.title=info[0].Title;
        //                 _this.artwork.process=info[0].Process;
        //                 _this.artwork.day_made=info[0].Day_Made;
        //                 _this.artwork.artist=info[0].Artist;
        //                 _this.artwork.genre=info[0].Genre;
        //                 document.getElementById("artworkdetail").innerHTML=_this.artwork;

        //             //biến JSON object gửi từ router thành JS Object bằng JSON.parse(this.responseText)
        //         }
        //     };
        //     xhttp.open("GET", "/detail", true);
        //     xhttp.send();
        // },



    // signup: function()  {
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.onreadystatechange = function() {
    //             if (this.readyState == 4 && this.status == 200) {
    //                 //do sth here
    //                 document.getElementById("response").innerHTML=this.responseText;
    //             }
    //         };
    //         xhttp.open("POST", "/signup", true);
    //         xhttp.setRequestHeader("Content-type", "application/json");
    //         // xhttp.setRequestHeader("Content-type", "application/text");
    //         xhttp.send(JSON.stringify(this.account));
    //     },