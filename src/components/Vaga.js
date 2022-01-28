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

function limparBusca(){
   
    setLinguagem('');

}

return(
    <>
        <div className="container">
        <div className="header"></div>
        <div className="searchBar">
            <button onClick={limparBusca}>Clear</button>
        </div>
            {datas.filter((item) => {
                if(linguagem == ""){
                    return item
                }else if(item.languages.includes(linguagem)){
                    return item
                }
            }).map((item) => (
                <ul key={item.id}>
                    {validacaoNew(item)}
                    {validacaoFeature(item)}
                    <div className="vaga">
                        <div className="empresa">
                            <img src={item.logo}/>
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
                                    <button onClick={() => setLinguagem(languages)}><strong>{languages}</strong></button>
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