//const API_URL = 'https://projectnode-production-ef13.up.railway.app/create';
function insertar(){
   var vPAIS = document.getElementById("PAIS").value;
   var vIRC  = document.getElementById("IRC").value;
   var vEVEN = document.getElementById("EVEN").value;
   var vAYO  = document.getElementById("AYO").value;

   const newPOST = {
      Pais: vPAIS,
      Irc: vIRC,
      Eventos: vEVEN,
      Ayo: vAYO
   }
   
   console.log(newPOST);
   console.log(JSON.stringify(newPOST));
  
   fetch("https://projectnode-production-ef13.up.railway.app/create", {
      method:'POST',
      body: JSON.stringify(newPOST),
      headers:{
         "Content-type": "application/json"
      }
   })
      .then(res => 'Pais Insertado')
      .then(data => console.log(data))
}

