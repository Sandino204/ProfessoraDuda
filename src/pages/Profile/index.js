import React from 'react'
import {Row, Button} from 'reactstrap'
import './styles.css'
import Guy from '../../shared/guy.PNG'
import {Link} from 'react-router-dom'

function Profile({data}){

    if(data != null || data != undefined){
        const nameall = data.tName
        const name = data.name
        const Job = data.job
        const JobPlace = data.local
        const age = data.age
        const gender = data.gender
        const Education = data.education
        const midias = data.education
        const objetivos = 'Marcos tem  economizado dinheiro para comprar um apartamento proprio e morar com sua familia, e deseja se organizar melhor e equilibrar as finaças para começar a investir parte do seu salario e economizou'
        const conquist = 'Atendido pela Duda no dia 30/05/2020 as 15:00'
        return(
            <div className="container-fluid orange2 all">
                <Row><h1 className="text-white ml-5">Profile: {nameall}</h1></Row>
                    <div className="profileP bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 row justify-content-center">
                                    <img src={Guy} alt="" className="img-thumbnail rounded-circle my-5 col-6"/>
                                    <h2 className="col-12 text-primary text-center">{name}</h2>
                                    <h4 className="col-12 text-secondary text-center mb-5">{Job}</h4>
                                </div>
                                <div className="col-8 row justify-content-end mt-5 ml-auto">
                                    <h3 className="font-weight-bold col-12 mb-5">{conquist}</h3>
                                </div>
                                <div className="col-7 row">
                                <div className="col-12 row mt-5">
                                        <p className="col-2 font-weight-bold">Empresa: </p>
                                        <p className="col-10 text-secondary mr-auto">{JobPlace}</p>
                                        <p className="col-2 font-weight-bold">Idade: </p>
                                        <p className="col-10 text-secondary">{age}</p>
                                        <p className="col-2 font-weight-bold">Genero: </p>
                                        <p className="col-10 text-secondary">{gender}</p>
                                        <p className="col-2 font-weight-bold">Educação: </p>
                                        <p className="col-10 text-secondary">{Education}</p>
                                        <p className="col-2 font-weight-bold">midias: </p>
                                        <p className="col-10 text-secondary">{midias}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
    
}

export default Profile