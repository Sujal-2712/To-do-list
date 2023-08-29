let list = document.getElementById("list");

function newElement() {
  let li = document.createElement("li");
  let val = document.getElementById("task").value;
  let t = document.createTextNode(val);
  if(t.length>=30)
  {
    alert("Value is too long...");
    document.getElementById("task").value = "";
    return;
  }
  li.className = "sujal";
  li.appendChild(t);
  if (val === "") {
    alert("You must write something");
  } else {
    document.getElementById("list").appendChild(li);
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    saveData();
  }
  document.getElementById("task").value = "";

  // let close = document.getElementsByClassName("close");
  // let i;
  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function () {
  //     let div = this.parentElement;
  //     div.remove();
  //   };
  // }

  // let temp_list = document.getElementsByClassName("sujal");
  // for (let i = 0; i < temp_list.length; i++) {
  //   if (i % 2 == 0) {
  //     temp_list[i].style.backgroundColor = "lightgrey";
  //   }
  // }
  function saveData() {
    localStorage.setItem("data", list.innerHTML);
  }
}

list.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();
