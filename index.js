// function validate()
// {
//     var username=document.getElementById("username").value;
//     var numberm=document.getElementById("number").value;
//     // var regex=/E00/; 
//     // var regex=/[sdp]imple/;
//     // var regex=/[a-z]00/i;
//     // var regex=/[0-9]abc/;
//     // var regex=/[0-5]a[6-9]/;
//     var regex=/[^0-5][a-z]/;
//     var regex=/[7-9]\d{9}/;
//     if(regex.test(username))
//     {
//     return true;
//     }
//     else{
//     document.getElementById("labeluser").style.visibility="visible";
//     return false;
//     }
   
   
// }




// number validation and email validation
// (yourname) @ (domain) . (.extension)
// function validate()
// {
//     var text=document.getElementById("text2").value;
//     var regx=/^([a-zA-z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;
//     if(regx.test(text))
//     {
//         document.getElementById("labelofemail").innerHTML="valid email";
//         document.getElementById("labelofemail").style.visibility="visible";
//         document.getElementById("labelofemail").style.color="green";
//     }
//     else{
        
//         document.getElementById("labelofemail").innerHTML="invalid email";
//         document.getElementById("labelofemail").style.visibility="visible";
//         document.getElementById("labelofemail").style.color="red";
//     }
// }
function validate()
{
    var text=document.getElementById("text2");
    var labelofemailx=document.getElementById("labelofemail");
    var emailicon=document.getElementById("emailicon");
    var regx=/^([a-zA-z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    if(regx.test(text.value))
    {
        document.getElementById("labelofemail").style.visibility="visible";
        labelofemailx.style.color="green";
        document.getElementById("labelofemail").innerHTML="Valid Email";
        emailicon.style.color="green";
        return true;
        
    }
    else{
        
        document.getElementById("labelofemail").style.visibility="visible";
        labelofemailx.style.color="red";
        document.getElementById("labelofemail").innerHTML="Invalid Email";
        emailicon.style.color="red";
        emailicon.style.fontSize="20px";
        
        return false;
    }
    
}
