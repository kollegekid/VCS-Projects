// modified
function f1() {
  document.getElementById('i2').value = "";
  document.getElementById('i3').value = "";
  var v1 = Number(document.getElementById('i1').value);
  v1 *= 10;
  document.getElementById('totalcost').innerHTML = v1 + "/- INR";
}
function f2() {
  document.getElementById('i1').value = "";
  document.getElementById('i3').value = "";
  var v2 = Number(document.getElementById('i2').value);
  v2 *= 15;
  document.getElementById('totalcost').innerHTML = v2 + "/- INR";
}
function f3() {
  document.getElementById('i1').value = "";
  document.getElementById('i2').value = "";
  var v3 = Number(document.getElementById('i3').value);
  v3 *= 20;
  document.getElementById('totalcost').innerHTML = v3 + "/- INR";
}
function reset(){
  document.getElementById('i1').value = "";
  document.getElementById('i2').value = "";
  document.getElementById('i3').value = "";
  document.getElementById('totalcost').innerHTML = "0/- INR";
}
function applied(){
  var cnm = document.getElementById('cname').value;
  if(cnm == ""){
    alert("Please enter valid Coupon Name.")
  }
  else{
    alert(cnm + " Coupon Applied.");
  }
  
}