//your JS code here. If required.

const enterBtn = document.getElementById("enterBtn");

function onclick(){
    const para = document.getElementById("status");
    const newHeading = document.createElement("h1");
	newHeading.id = "status";
    newHeading.innerText = "Entered Metaverse";
    para.replaceWith(newHeading);
}
enterBtn.addEventListener("click",onclick);
