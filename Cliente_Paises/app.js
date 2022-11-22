document.getElementById('formulario').addEventListener('submit', function(e) {
   e.preventDefault();

   let formulario = new FormData(document.getElementById('formulario'));

   fetch('registrar.php', {
      method: 'POST',
      body: formulario,
   })
   .then(res => res.json())
   .then(data => {
      if(data == 'true') {
         document.getElementById('txt_pais').value = '';
         document.getElementById('txt_irc').value = '';
         document.getElementById('txt_evento').value = '';
         document.getElementById('txt_year').value = '';
         alert('El registro se insertó correctamente');
      }else{
         console.log(data);
      }
   })
})