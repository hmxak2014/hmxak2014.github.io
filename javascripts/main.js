$(document).ready(function(){
   console.log("now ready");

   window.onload = function(){
        var aboutMe = document.getElementById('aboutMe');

        console.log('aboutMe= '+aboutMe);
        aboutMe.onclick = function(){
            alert('쫌만 기다려봐~~');
        }
    }
});
