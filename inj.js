window.addEventListener("DOMContentLoaded", function () {
   mypost({
        url: `${baseURL}/special`,
        method: "GET",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
   });
});