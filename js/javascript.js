function innit(){
  
  var ebutton = document.getElementById('entrybutton');
  
  function showMeText(){
    var txtbox = document.getElementById('textoutput');
    document.getElementById('textoutput').innerHTML = txtbox.value;
    alert("Abby Garcia:" txtbox.value);
  }
  
  ebutton.addEventListener('click',showMeText);
  
}
window.addEventListener('load',init);
  
  
  