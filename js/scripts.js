$(document).ready(function() {

  $("form#survey").submit(function(event){

    event.preventDefault();

    //input variables
    var end = $("input:radio[name=end]:checked").val();
    var software = $("#software").val();
    var sitetype = $("input:radio[name=sitetype]:checked").val();
    var size = $("#size").val();

    //begin branching for mathcing

    if (end === "front") {

      //here we know that the user is into front-end development
      $("#css").show();

    } else {

      //here we know that the user is into back-end development
      if (software === "mobile") {

      //here we know that the user is into back-end and mobile development
      $("#java").show();

    } else if (software === "web") {

      //here we know that the user is into back-end and web development and therefore has more options
        if (sitetype === "content") {

          //here we know that the user is into back-end and web development and wants to build content-heavy sites
          $("#php").show();

        } else {

          //here we know that the user is into back-end and web development and wants to build interactive site
          $("#ruby").show();

        }

    } else {

      //here we know that the user is into back-end and internal development
      $("#c").show();

    }

    }
  });
});
