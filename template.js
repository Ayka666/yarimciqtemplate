function myFunction () {
if($('#headtoggle').css('display') == 'none'){ 
document.getElementById("headtoggle").style.display = "block";
document.getElementById("first").style.transform = "rotate(45deg)";
document.getElementById("first").style.position = "absolute;";
document.getElementById("first").style.marginTop = "73px ";
document.getElementById("second").style.transform = "rotate(135deg)";
document.getElementById("second").style.position = "absolute;";
document.getElementById("third").style.display = "none";

}
else {
document.getElementById("headtoggle").style.display = "none"; 
document.getElementById("first").style.transform = "rotate(0deg)";
document.getElementById("second").style.transform = "rotate(0deg)";
document.getElementById("first").style.marginTop = "62px";
document.getElementById("third").style.display = "";
}};
// function firstf() {
// 	if($('#headtoggle').css('display')=='none'){
// 		document.getElementById("headtoggle").css=".spinEffect"
// 	}
// }
// function myFunction() {
//     document.getElementById('foo').style.cssText = 'background-color: red; color: white; font-size: 44px';
// }
// function firstf() {
    // document.getElementById('first').style.cssText = ' transform: rotate(45deg);  -webkit-transform: rotate(45deg);   -ms-transform: rotate(45deg);   position: absolute;   margin-top: 82px !important;';