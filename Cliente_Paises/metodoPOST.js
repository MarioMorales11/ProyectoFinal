const API_URL = 'http://localhost/PaisesAfectados/PaisesService.php';
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

   /* NO RECONOCÉ LA INSTRUCCIÓN $ Y NO SÉ PORQUÉ GGG
   $.post(API_URL,newPOST,function(data, status){
      console.log(`${newPOST} and status is ${status}`)
   })
   */

    
   fetch("http://localhost/PaisesAfectados/PaisesService.php", {
      method:'POST',
      body: JSON.stringify(newPOST),
      headers:{
         "Content-type": "application/json"
      }
   })
      .then(res => res.json())
      .then(data => console.log(data))
}

