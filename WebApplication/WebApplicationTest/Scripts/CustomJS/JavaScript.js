function addressCheck()
{
    var check = document.querySelector('#checkAddress').value;          
    if (check == 0) {
        var address2 = document.querySelector('#address2');
        var treeEl = document.createElement("treeEl");
        treeEl.innerText = "Mailing Address: ";
        var add1 = document.createElement("input");
        add1.setAttribute("type", "text");
        address2.appendChild(treeEl);
        address2.appendChild(add1);
    }
}   
function locationPopulate(json) {
    json = JSON.parse(json);
    var state = document.getElementById("State");
    var city = document.getElementById("City");
    state.value = json.state;
    city.value = json.city;
}

function checkZipcode() {
    var zipcode = document.getElementById("zipcode").value;
    var clientKey = 'js-fgDyrGxYtmf9BdVUpdShouyb6iBNoDneAaojCK6YKnkmNDTGOe46AG9QaKKZ0ca7';
    var url = "https://www.zipcodeapi.com/rest/" + clientKey + "/info.json/" + zipcode + "/radians";
    //1. create XHR object
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function (e) {    //Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var result = xhr.responseText;
            if (result !== null || result !== "" || result !== undefined) {
                if (result.charAt(0) === '"' && result.charAt(result.length - 1) === '"') {
                    result = result.substr(1, result.length - 2);
                }
                locationPopulate(result);
            }
        }
    };
    xhr.send();
}





