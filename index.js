let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")  
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu= document.getElementById('sidemenu');

function Openmenu(){
    sidemenu.style.right="0";
}
function Closemenu(){
    sidemenu.style.right="-200px";
}


// ----Google---
const scriptURL = 'https://script.google.com/macros/s/AKfycbwbAhxs6Uhs1CwNWP9gWiAUaiVtSc7bjWCeIoHrh9UEj6tgFx_7-LX84EWte9MSnOqz/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>  {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML=" "
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
//  Setup and start animation!
var typed = new Typed('#element', {
  strings: ['Web Developer', 'Web Designer','Frontend Developer'],
  typeSpeed: 50,
  backSpeed:50,
  backDelay:1000,
  loop:true
});

 

