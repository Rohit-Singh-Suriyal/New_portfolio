// add a event listener on multiple elements;
const addEventonelements=function(elements,eventType,callback){
  elements[i].addEventListener(eventType,callback);


}

console.log("roht")
//preloader
const preloader=document.querySelector("[data-loader]");
;
window.addEventListener("load",function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded")
})


//mobile nav toggle
const navbar=document.querySelector("[data-navbar]");
console.log(navbar);
const navtoggler=document.querySelector("[data-nav-toggler]");
console.log(navtoggler);
const togglenavbar=function(){
    console.log("rohit");
    navbar.classList.toggle("active");
}
navtoggler.addEventListener("click",togglenavbar);


//HEADER
//active header when window scrolled to 50px;
const header=document.querySelector("[data-header]");
const activeheader=function(){
    if(window.scrollY>50){
         header.classList.add("active");
    }
    else{
        header.classList.remove("active")
    }
}
window.addEventListener("scroll",activeheader);
let form=document.querySelector(".contact-form");
let Name=document.querySelector(".nameform");
let email=document.querySelector(".emailform");
let subject=document.querySelector(".subjectform");
let message=document.querySelector(".textform");
const button=document.querySelector(".formbutton");
button.addEventListener('click',()=>{
  const object={
    name:Name.value,
    email:email.value,
    subject:subject.value,
    message:message.value

  }
  const sendata=async(object)=>{
   
  const response=await fetch("https://rohit-s-project-default-rtdb.firebaseio.com/info.json",{
      method:'POST',
      body:JSON.stringify(object),
      headers: {
          'Content-Type': 'application/json',
        },
  
  
    })
    console.log(done);
  
  }
  sendata(object).catch((error)=>{
    console.log("error.message");
  })
  
    Name.value="";
    email.value="";
    subject.value="";
    message.value="";
    done="true";
    setTimeout(()=>{
      const submit=  document.createElement('div');
       submit.classList.add("success");
       submit.innerHTML="your form is successfully submitted";
       form.appendChild(submit);
    },1000)

})



