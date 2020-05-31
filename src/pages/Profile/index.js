import React from 'react'
import {Row, Button} from 'reactstrap'
import './styles.css'
import Guy from '../../shared/guy.PNG'
import {Link} from 'react-router-dom'
import Medal from '../../shared/medal.jpg'

function Profile({data}){

    if(data != null || data != undefined){
        
        const name = data.name
        const Job = data.job
        const JobPlace = data.local
        const age = data.age
        const gender = data.gender
        const Education = data.education
        const midias = data.midias
        const conq = data.conq

        function conqN(conq){
            if(conq === 1){
                return(
                    'Iniciante'
                )
            }if(conq === 2){
                return(
                    'Poupa Para Min'
                )
            }if(conq === 3){
                return (
                    'Conservador'
                )
            }if(conq === 4){
                return(
                    'Moderado'
                )
            }if(conq === 5){
                return(
                    'Agressivo'
                )
            }
        }

        function conqe(conq){
            if(conq === 0){
                return(
                    <div className="col-8 row justify-content-end mt-5 ml-auto">
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Iniciante</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Poupa Para Mim</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Conservador</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Moderado</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Agressivo</h3>
                    </div>
                )
            }else if(conq === 1){
                return(
                    <div className="col-8 row justify-content-end mt-5 ml-auto">
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Iniciante</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Poupa Para Mim</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Conservador</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Moderado</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Agressivo</h3>
                    </div>
                )
            }else if(conq === 2){
                return(
                    <div className="col-8 row justify-content-end mt-5 ml-auto">
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Iniciante</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Poupa Para Mim</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Conservador</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Moderado</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Agressivo</h3>
                    </div>
                )
            }else if(conq === 3){
                return(
                    <div className="col-8 row justify-content-end mt-5 ml-auto">
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Iniciante</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Poupa Para Mim</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Conservador</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Moderado</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Agressivo</h3>
                    </div>
                )
            }else if(conq === 4){
                return(
                    <div className="col-8 row justify-content-end mt-5 ml-auto">
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Iniciante</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Poupa Para Mim</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Conservador</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Moderado</h3>
                        <h3 className="font-weight-bold text-secondary col-12 mb-5">Agressivo</h3>
                    </div>
                )
            }else if(conq === 5){
                return(
                    <div className="col-8 row justify-content-end mt-5 ml-auto">
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Iniciante</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Poupa Para Mim</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Conservador</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Moderado</h3>
                        <h3 className="font-weight-bold text-warning col-12 mb-5"><img src={Medal} alt="Medal" style={{height: '50px', width: '50px'}}/> Agressivo</h3>
                    </div>
                )
            }
        }

        const objetivos = 'Marcos tem  economizado dinheiro para comprar um apartamento proprio e morar com sua familia, e deseja se organizar melhor e equilibrar as finaças para começar a investir parte do seu salario e economizou'
        return(
            <div className="container-fluid orange2 all">
                <Row><h1 className="text-white ml-5">Profile: {conqN(conq)}</h1></Row>
                    <div className="profileP bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 row justify-content-center">
                                    <img src={Guy} alt="" className="img-thumbnail rounded-circle my-5 col-6"/>
                                    <h2 className="col-12 text-primary text-center">{name}</h2>
                                    <h4 className="col-12 text-secondary text-center mb-5">{Job}</h4>
                                </div>
                                {conqe(conq)}
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