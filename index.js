var verified  = "";
verifyDetails = (name,date,password) =>{
     if(name === "Navya" && date === "2001-02-12" && password === "Wrongnumber"){
         var Details = window.btoa(name+date+password);
         verified = Details;
         document.getElementById("invalid").innerHTML = "Verifying..."+'<div class="spinner-border text-secondary" role="status">'+
         '</div>';
         setTimeout(()=>{
          document.getElementById("invalid").innerHTML = "Verified Successfully "+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">'+
          '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>'+
        '</svg>';
          document.getElementById("invalid").style.color = "green";
          document.getElementById('link').innerHTML = '<img src="giftbox.gif" class="mt-3" height="50px" width="50px" alt="">';
          document.getElementById('text').innerHTML = '<h3>'+"Tap to open  "+'<span>' + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">'+
          '<path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>'+
        '</svg>'+'</span>'+'</h3>';
       },3000)

     }
     else{
       document.getElementById("invalid").innerHTML = "Please Enter Correct Details "+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">'+
       '<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>'+
     '</svg>';
       document.getElementById("invalid").style.color = "red";
     }
}


checkInputs =()=>{
    var inputs = document.getElementsByClassName('form-control');
    let btn = document.querySelector('#getbtn');
    let isValid = true;
    for (var i = 0; i < inputs.length; i++){
      let changedInput = inputs[i];
      if (changedInput.value.trim() === "" || changedInput.value === null){
        isValid = false;
        break;
    }
}
btn.disabled = !isValid;
}

if (typeof exports !== "undefined") {
    module.exports = {
      verifyDetails,
      checkInputs,
    };
  }