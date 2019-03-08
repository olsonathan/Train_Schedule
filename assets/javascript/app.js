  // START CODING BELOW!!

    
  

     // Initialize Firebase
     var config = {
    apiKey: "AIzaSyCX6ySJkWipGe-lFSjVDkK9orqzoSP5CNM",
    authDomain: "trains-b927d.firebaseapp.com",
    databaseURL: "https://trains-b927d.firebaseio.com",
    projectId: "trains-b927d",
    storageBucket: "trains-b927d.appspot.com",
    messagingSenderId: "865904247054"
      };
      firebase.initializeApp(config);

  
      
  
      // Create a variable to reference the database
      var database = firebase.database();
  
      // Initial Values
      var name = "";
      var des = "";
      var time = "";
      var freq = "";
      var from = "";
  
      // Capture Button Click
      $("#add-user").on("click", function(event) {
        // Don't refresh the page!
        event.preventDefault();
  
        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        name = $("#name-input").val().trim();
        from = $("#from-input").val().trim();
        des = $("#des-input").val().trim();
        freq = $("#rate-input").val().trim();
        time = $("#time-input").val().trim();
        console.log(typeof date)
  
        database.ref().push({
          name : name,
          from: from,
          des: des,
          time : time,
          freq : freq,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
  
      });
  
  
  
     // var empStartPretty = moment.unix(date).format("MM/DD/YYYY");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    //   var empMonths = moment().diff(moment(date, "X"), "months");
     //     console.log(empMonths);
      // Firebase watcher + initial loader HINT: .on("value")
      database.ref().on("child_added", function(childsnapshot) {
  
        // Log everything that's coming out of snapshot
       
        console.log(childsnapshot.val().name);
        console.log(childsnapshot.val().from);
        console.log(childsnapshot.val().des);
        console.log(childsnapshot.val().time);
        console.log(childsnapshot.val().freq);
        console.log(childsnapshot.val().dateAdded)
       
        // Change the HTML to reflect
       // $("#name-display").text(childsnapshot.val().name);
       // $("#role-display").text(childsnapshot.val().role);
       // $("#rate-display").text(childsnapshot.val().rate);
       // $("#date-display").text(childsnapshot.val().date);
  
  
        var add = $("<tr>")
  
              var name1 = $("<td>");
              name1.text(childsnapshot.val().name);
              add.append(name1)
  
              var name2 = $("<td>");
              name2.text(childsnapshot.val().from);
              add.append(name2)
  
              var name3 = $("<td>");
              name3.text(childsnapshot.val().des);
              add.append(name3)
  
              var name4 = $("<td>");
              name4.text((childsnapshot.val().time) + " mins");
              add.append(name4)
  
                 
              var name5 = $("<td>");
              name5.text(childsnapshot.val().freq);
              add.append(name5)
  
              // need to compute time against current
              var name6 = $("<td>");
              
              
              add.append(name6)
  
                  //need to do math rate*date in months
              var name7 = $("<td>");
              
              var t = childsnapshot.val().time;
              var randomFormat = "hh:mm:ss";
              var tt = moment(t, randomFormat).fromNow();
              console.log(t)
              console.log(tt)
              name7.text(tt)
              
              add.append(name7)
  
  
      //   add.text(childsnapshot.val().role);
      //   add.text(childsnapshot.val().rate);
       //  add.text(childsnapshot.val().date);
       
        
  
      $("#myTable").append(add);
  
  
  
  
  
  
  
  
  
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  
      function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
      }
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
  
      
  
  
  
  
     