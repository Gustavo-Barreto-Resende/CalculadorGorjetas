// Função para calcular a gorjeta
function calcGorjeta (valor){

        valor= document.getElementsByName("valor")[0].value; 
        output = document.querySelector('#output');
        radio = document.getElementsByName('desc');
            
            if (radio[0].checked) {
               valor=valor*0.10
               alert(`A gorjeta sairá: ${valor}`);
               
               //output.innerHTML = `A gorjeta sairá: ${valor}`;               
            }
            if (radio[1].checked) {
                valor=valor*0.15
               alert(`A gorjeta sairá: ${valor}`);
               //output.innerText = `A gorjeta sairá: ${valor*0,15}`;
            }
            if (radio[2].checked) {
                valor=valor*0.20
               alert(`A gorjeta sairá: ${valor}`);
               // output.innerText = `A gorjeta sairá: ${valor*0,20}`;
               
           }
        };

