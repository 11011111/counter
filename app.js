
let users = document.getElementById('users');
const ws = new WebSocket("ws://localhost:4567");

let obj = {
     numb: 1
}

ws.onsend(JSON.stringify(obj));

ws.onmessage = response => {
     let online = JSON.parse(response.data);
     users.innerText = online.numb;
}