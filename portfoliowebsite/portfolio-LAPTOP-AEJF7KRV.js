var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname,event){
    for(tablink of tablinks){
         tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

    var sidemeu = document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.right ="0px";
        sidemeu.style.display = "pink";

    }
    function closemenu(){
        sidemeu.style.right ="-200px";
    }
  

  const scriptURL = 'https://script.google.com/macros/s/AKfycbySpYHBJcVkbmBgO_CahjQkDfiyMeghSOAvUCee66CwC_e6mQH6KIeWIYcAQ1R-TQ9j/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML =""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


