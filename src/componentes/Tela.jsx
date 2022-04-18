import React, { useState } from 'react';

import './tela.css';



function Tela(props) {


    const [num, setNum] = useState(0);
    const [firstnum, setFirstnum] = useState();
    
    const [operador,setOperador] = useState();



    function numDigitado(e) {
       
        var digitado = e.target.value;
        if (num === 0) {
            setNum(digitado);
        } else {
            setNum(num + digitado)
        }

    }

    function porcentagem(e) {
        setNum(num / 100);
    }

    function clear(e) {
        setNum(0);
    }


    function operacao(e) {
        var operador = e.target.value;
        
        
        console.log(operador)
        setOperador(operador);
        setFirstnum(num);
        setNum(0);

        }
    
    function resultado(){

        console.log("calculou");
        console.log(firstnum);
        console.log(num);
        console.log(operador);
        if(operador === "+"){
            setNum(parseFloat(firstnum) + parseFloat(num));
        }
         
        if(operador === "/"){
            setNum(firstnum / num);
        }
        if   (operador === "-"){
            setNum(firstnum - num);
        }
        if(operador === "*"){
            setNum(firstnum * num);
        }
              
        
    }
   
    

    return (
        <div className="telinha-preta">
            <div className="container-display">
                <div className="campo-digitado">

                    <h1>{num}</h1>
                </div>
            </div>

            <div className="botao-linha">
                <button onClick={clear} className="butao">C</button>
                <button value="B" className="butao">B</button>
                <button value="%" onClick={porcentagem} className="butao">%</button>
                <button value ="/" onClick={operacao} className="butao ">  /</button>
            </div>
            <div className="botao-linha">
                <button onClick={numDigitado} value={7} className="butao">7</button>
                <button onClick={numDigitado} value={8} className="butao">8</button>
                <button onClick={numDigitado} value={9} className="butao">9</button>
                <button onClick={operacao} value ="*" className="butao ">X</button>
            </div>

            <div className="botao-linha">
                <button onClick={numDigitado} value={4} className="butao">4</button>
                <button onClick={numDigitado} value={5} className="butao">5</button>
                <button onClick={numDigitado} value={6} className="butao">6</button>
                <button onClick={operacao}  value ="-" className="butao">-</button>
            </div>

            <div className="botao-linha">
                <button onClick={numDigitado} value="1" className="butao">1</button>
                <button onClick={numDigitado} value="2" className="butao">2</button>
                <button onClick={numDigitado} value="3" className="butao">3</button>
                <button onClick={operacao}  value="+" className="butao ">+</button>
            </div>
            <div className="botao-linha">
                <button onClick={numDigitado} value="H" className="butao">H</button>
                <button onClick={numDigitado} value="0" className="butao">0</button>
                <button onClick={numDigitado} value="." className="butao">,</button>
                <button onClick={resultado}  className="butao corzinha">=</button>
            </div>



        </div>
    );
}

export default Tela;