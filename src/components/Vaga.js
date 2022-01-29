import React from "react";
import "../componentes-css/Vaga.css";
import { useState } from "react";

export default function Vaga(){

var datas = require('../data.json');

var classNameNew;
var classNameFeatured;
var mensagemNew;
var mensagemFeatured = 'Featured';

const [linguagem, setLinguagem] = useState([]);

function validacaoNew(item){
    if(item.new === true){
        classNameNew = 'new-active'
        mensagemNew = 'New!';
    }else{
        classNameNew = 'new'
        mensagemNew = '';
    }
}

function validacaoFeature(item){
    if(item.featured === true){
        classNameFeatured = 'new-feature'
        mensagemFeatured = 'Featured';
    }else{
        classNameFeatured = 'new'
        mensagemFeatured = '';
    }
}

function addFiltro(languages){
    if(!linguagem.includes(languages)){
        setLinguagem(oldArray => [...oldArray, languages])
    }
}

function removeFiltro(value){
    setLinguagem(oldArray => [...oldArray.filter((item) => item !== value)])
    console.log(linguagem)
}

function limparBusca(){
    setLinguagem('');
}

return(
    <>
        <div className="container">
        <div className="header"></div>
            <div>
                {linguagem.length === 0 ? null : 
                    <div className="filtros-selecionados">
                        {linguagem.includes('') ?  null : linguagem.map((filtro) => (
                            <ul key={filtro}>
                                <div className="botao-filtro">
                                    <div className="botao-linguagem"><p><strong>{filtro}</strong></p></div>
                                    <div><button className="botao-x" onClick={() => removeFiltro(filtro)}><img src="./images/x.png"/></button></div>
                                </div>
                            </ul>
                        ))}
                        {linguagem.length === 0 ? null : <button className="botao-clear" onClick={limparBusca}>Clear</button>}              
                    </div>
                }
            </div>
            {datas.filter((item) => {
                var i;
                var ok = 0;
                if(linguagem == ''){
                    return item       
                }else{
                    for(i = 0; i < linguagem.length; i++){
                        if(item.languages.includes(linguagem[i])){
                            ok += 1;
                            if(ok === linguagem.length){
                                return item
                            }
                        }
                    }
                }
            }).map((item) => (
                <ul key={item.id}>
                    {validacaoNew(item)}
                    {validacaoFeature(item)}
                    <div className="vaga">
                        <div className="empresa">
                            <img src={item.logo} alt="logo empresarial"/>
                            <div className="infos">
                                <div className="info-cargo">
                                    <div className="info-cargo-2">
                                        <h3>{item.company}</h3>
                                        <p className={classNameNew}>{mensagemNew}</p>
                                        <p className={classNameFeatured}>{mensagemFeatured}</p>
                                    </div>
                                    <h2>{item.position}</h2>                          
                                </div>
                                <div className="infos-adicionais">
                                    <p>{item.postedAt}</p>                                
                                    <p>{item.contract}</p>
                                    <p>{item.location}</p>                                                                                           
                                </div>
                            </div>
                        </div>
                        <div className="filtros">
                            {item.languages.map((languages) => (
                                <li key={languages}>
                                    <button onClick={() => addFiltro(languages)}><strong>{languages}</strong></button>
                                </li>
                            ))}
                        </div>
                    </div>
                </ul>
            ))}
        </div>
    </>
);
}