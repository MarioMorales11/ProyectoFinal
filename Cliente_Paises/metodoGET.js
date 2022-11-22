const API_URL = "https://casopractico4heehee.000webhostapp.com/PaisesAfectados/PaisesService.php";

const xhr = new XMLHttpRequest();

function onRequestHandler(){
   if(this.readyState == 4 && this.status == 200){
      //0 = UNSET, no se ha llamado al método open
      //1 = OPENED, se ha llamado al método open
      //2 =  HEADERS_RECEIVED, se está llamando al método send()
      //3 = LOADING, está cargando o recibiendo respuesta
      //4 = DONE, se ha completado la operación
      const data = JSON.parse(this.response);
      //console.log(data);
      const HTMLResponse = document.querySelector('#app');

      const tpl = data.map((pais) => `<p><b>ID:</b> ${pais.Id}<br><b>País:</b> ${pais.Pais}<br><b>IRC:</b> ${pais.Irc}<br><b>Evento:</b> ${pais.Eventos}<br><b>Año:</b> ${pais.Ayo}<br></p>`);
      HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
   }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}`);
xhr.send();
