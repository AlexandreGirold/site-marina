var elements = document.getElementsByClassName("topbar");

function Menu1()
{
    window.location.href = "../Html/menu.html";    
}

function Menu2()
{
    window.location.href = "../Html/about.html";    
}

function Menu3()
{
    window.location.href = "../Html/gallery.html";    
}

function Contact()
{
    window.location.href = "../Html/contact.html";    
}

function Enter()
{
    window.location.href = "../Html/menu.html"; 
}

function isNotEmpty(value) {//to use in the checking funtion.
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

function getGender() //used in sendContact()
{
    return document.querySelector('input[name="gender"]:checked')
}

function sendContact()//for now useless no PHP.
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var gender = getGender();
    var data = "name=" + name + "&email=" + email + "&message=" + message;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php", true);
}
