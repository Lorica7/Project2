

$("#signIn").on("click", function(event){
    event.preventDefault();
    console.log("Hi,  the sign-in listener works")

    var findUser ={
        firstName: $("#signFirst").val().trim(),
        email: $("#email").val().trim()
    };

    function find(findUser) {
        $.ajax({
          method: "GET",
          url: "/api/email",
          data: findUser
        }).then(console.log(findUser));
      }
    
      find(findUser);
 


})