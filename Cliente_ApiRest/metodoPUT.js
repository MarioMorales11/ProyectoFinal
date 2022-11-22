const API_URL = 'https://projectnode-production-ef13.up.railway.app/update';
function actualizar(){
   var vId = document.getElementById("ID").value;
   var vPAIS = document.getElementById("PAIS").value;
   var vIRC  = document.getElementById("IRC").value;
   var vEVEN = document.getElementById("EVEN").value;
   var vAYO  = document.getElementById("AYO").value;

   const newPOST ={
      Pais: vPAIS,
      Irc: vIRC,
      Eventos: vEVEN,
      Ayo: vAYO
   }
  
   fetch(`https://projectnode-production-ef13.up.railway.app/update/${vId}`, {
      method:'PUT',
      body: JSON.stringify(newPOST),
      headers:{
         "Content-type": "application/json"
      }
   })
      .then(res => 'Pais Actualizado')
      .then(data => console.log(data))
}
