const ROUTINE=document.getElementById("process");function allowDrop(e){e.preventDefault()}function drag(e){e.dataTransfer.setData("text",e.target.id)}function add(e){e.preventDefault(),e.target.classList.remove("focus");var t,n=e.dataTransfer.getData("text"),n=document.getElementById(n);let a;n.classList.contains("copy")?((t=n.cloneNode(!0)).id="newId"+Math.random(),t.classList.remove("copy"),t.classList.add("move"),a=t):n.classList.contains("move")&&(a=n),a.addEventListener("dragenter",function(e){dragEnter(e)}),a.addEventListener("dragleave",function(e){dragLeave(e)}),e.target.classList.contains("droppable")?e.target.appendChild(a):e.target.classList.contains("item")&&a.appendAfter(e.target)}function trash(e){e.preventDefault();var t=document.getElementById(e.dataTransfer.getData("text"));e.target.classList.contains("remove")&&t.classList.contains("move")&&t.parentElement.removeChild(t)}function dragEnter(e){e.target.classList.add("focus"),event.preventDefault()}function dragLeave(e){e.target.classList.remove("focus"),e.preventDefault()}function Play(){let t="";for(let e=0;e<ROUTINE.childElementCount;e++)t+=ROUTINE.children[e].dataset.command;console.log(t),sendData(t+"\n")}function cleanProcess(){document.getElementById("process").innerHTML=""}Element.prototype.appendAfter=function(e){e.parentNode.insertBefore(this,e.nextSibling)};