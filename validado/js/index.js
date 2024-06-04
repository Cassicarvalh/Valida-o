function validar() {
    
    var telemovel = formulario.telemovel.value;
 
      if (isNaN(telemovel) == "") {
        formulario.telemovel.focus();
        alert('O número inserido não esta correto.');
          
          return false;
       }
       if (isNaN(telemovel).length!=9){
        alert("O número de telemóvel deverá conter 9 dígitos."); 
        
        return false;
    }
    if(isNaN(!telemovel).startsWith(9)) {
        alert("Telemóvel não começa com 9."); 
        
        return false;
        }
    };