var data = sessionStorage.data;
if(data == null){
    sessionStorage.setItem("data",JSON.stringify([]));
}
window.onload = function(e){
    let tBody = document.getElementsByTagName("tbody")[0];
    let storedArray = JSON.parse(sessionStorage.getItem("data"));
    for(let i = 0; i < storedArray.length; i++){
        let row = document.createElement("tr");
        for(let j = 0; j < storedArray[i].length; j++){
            let td = document.createElement("td");
            td.innerText = storedArray[i][j];
            row.appendChild(td);
        }
        let buttonsTD = document.createElement("td");
        buttonsTD.setAttribute("class" , "table-buttons");
        let editButton = document.createElement("button");
        editButton.setAttribute("id","edit");
        editButton.innerText = "Edit";
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id","delete");
        deleteButton.innerText = "Delete";
        buttonsTD.appendChild(editButton);
        buttonsTD.appendChild(deleteButton);
        row.appendChild(buttonsTD);
        tBody.appendChild(row);
    }
}

saveItem = () => {
    let id = document.getElementById("new-id").value;
    let name = document.getElementById("new-name").value;
    let age = document.getElementById("new-age").value;
    let row = [];
    row[0] = id;
    row[1] = name;
    row[2] = age;
    var storedArray = JSON.parse(sessionStorage.getItem("data"));
    storedArray.push(row);
    sessionStorage.setItem("data",JSON.stringify(storedArray));
}

searchTable = () => {
    let input = document.getElementById("search").value;
    input = input.toLowerCase();
    let tr = document.getElementsByTagName("tr");
    for(let i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName("td");
        for(let j = 0; j < td.length; j++){
            let tdItem = td[j].innerText;
            if(tdItem.indexOf(input) >  -1){
                tr[i].style.display = "";
                break;
            }
            else
                tr[i].style.display = "none";
        }
    }
}