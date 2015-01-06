$(document).ready(function(){
   console.log("now ready");

   window.onload = function(){
        var aboutMe = document.getElementById('aboutMe');
        var contact = document.getElementById('contact');

        console.log('aboutMe= '+aboutMe);
        aboutMe.onclick = function(){
            alert('쫌만 기다려봐~~');
        }
        contact.onclick = function(){
           alert('쫌만 기다려봐~~');
       }
    }
});
