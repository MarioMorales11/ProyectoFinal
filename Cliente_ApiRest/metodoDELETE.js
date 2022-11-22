function borrar(){
   var vId = document.getElementById("ID").value;
   const Id = vId;
   fetch(`https://projectnode-production-ef13.up.railway.app/delete/${Id}`, {
      method:'DELETE',
      headers:{
         "Content-type": "application/json"
      }
   })
      .then(res => 'Pais Borrado')
      .then(data => console.log(data))
}