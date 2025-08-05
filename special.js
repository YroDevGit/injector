window.addEventListener("DOMContentLoaded", function () {
    mypost({
         url: `${apiURL}/special`,
         method: "GET",
         success: function(response){
             console.log(response);
         },
         error: function(error){
             console.log(error);
         }
    });
 });