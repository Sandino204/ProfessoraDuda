import React from 'react'
import Prof from '../../shared/ProfDuda.PNG'
import {useState} from 'react'
import {Button} from 'reactstrap'
import './styles.css'
import { Link } from 'react-router-dom'


function Intro1(value){
    
    if(value === 0){
        return(
            <div className="col-8 row orange rounded shadow" style={{height: "80vh", marginTop: "10vh"}}>
                <h1 className="col-12 text-center text-light h1I my-auto">Banco BMG</h1>
            </div>
        )
    }else if(value === 1){
        return(
            <div className="col-8 row" style={{ marginTop: "10vh"}}>
                <div className="col-12 mt-0 mb-0 " style={{height: "250px", marginTop: "250px"}}><img src={Prof}  style={{height: "250px", marginTop: "250px"}} alt="Prof Duda"s className="m-0"/></div>
                <div className="col-12 orange rounded shadow row py-5"> 
                    <h2 className="col-12 text-center text-light">Oi!</h2>
                    <h3 className="col-12 text-center text-light">Eu sou a Professora Duda</h3>
                    <h3 className="col-12 text-center text-light">Sua parceira nessa jornada</h3>
                </div>
            </div>
        )
    }else if(value === 2){
        return(
            <div className="col-8 row" style={{ marginTop: "10vh"}}>
                <div className="col-12 mt-0 mb-0" style={{height: "250px", marginTop: "250px"}}><img src={Prof} style={{height: "250px", marginTop: "250px"}} alt="Prof Duda"s className="m-0"/></div>
                <div className="col-12 orange rounded shadow row py-5">
                    <h3 className="col-12 text-light text-center">Em todo este tempo, desenvolvemos ações para ajudar você.</h3>
                </div>
            </div>
        )
    }else if(value === 3){
        return(
            <div className="col-8 row" style={{ marginTop: "10vh"}}>
                <div className="col-12 mt-0 mb-0" style={{height: "250px", marginTop: "250px"}}><img src={Prof} style={{height: "250px", marginTop: "250px"}} alt="Prof Duda"s className="m-0"/></div>
                <div className="col-12 orange rounded shadow row py-5">
                    <h3 className="col-12 text-light text-center">Em todo este tempo, desenvolvemos ações para ajudar você.</h3>
                    <h3 className="col-12 text-light text-center">E eu sou uma delas!</h3>
                </div>
            </div>
        )
    }else if(value === 4){
        return(
            <div className="col-8 row" style={{ marginTop: "10vh"}}>
                <div className="col-12 mt-0 mb-0" style={{height: "250px", marginTop: "250px"}}><img src={Prof}  style={{height: "250px", marginTop: "250px"}} className="" alt="Prof Duda"s className="m-0"/></div>
                <div className="col-12 orange rounded shadow row py-5">
                    <h3 className="col-12 text-light text-center">Voce já esta conosco há 7 anos, mas você sabia que nós existimos há mais de 89 anos?</h3>  
                </div>
            </div>
        )
    }else if(value >= 5){
        return(
            <div className="col-8 row justify-content-center rounde" style={{height: "60vh", marginTop: "20vh"}}>
                <h2 className="col-12 text-light text-center">Você quer inicar a sua jornada<br></br> rumo aos seus objetivos <br></br> Comigo, aqui e agora?</h2>
                <Link to="/login" type="button" className="btn  pt-2 col-3 text-light orange rounded mt-5" style={{height: "50px"}}>Sim</Link>
                <Button className="offset-2 col-3 text-light orange rounded mt-5" style={{height: "50px"}}>Não</Button>
                <h3 className="col-12 text-light text-center mt-5">Você --------------> Seus Objetivos</h3>
            </div>
        )
    }
}

function Intro(){

    const [value, setValue] = useState(0)

    setTimeout(function(){
        setValue(value + 1);
    }, 5000)
    

    return(
        <div className="container"> 
            <div className="row justify-content-center">
                {Intro1(value)}
            </div>
        </div>
    )
}

export default Intro