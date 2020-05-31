import React, {useState} from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import './styles.css'
import { Link, useHistory} from 'react-router-dom'
import {DATA} from '../../database/db'

function Price2() {

    const [cpf, setCpf] = useState('')
    const [pass, setPass] = useState('')

    const history = useHistory()

    function submit(e){
        e.preventDefault()
        let i
        for(i = 0; i < DATA.length; i++){
            if(cpf == DATA[i].cpf && pass === DATA[i].pass){
                DATA[i].conq = 2    
                history.push(`/profile/${DATA[i].id}`)
            }
        }
        
    }

    return(
        <div className="container-fluid orange2 all">
            <Row className="justify-content-center">
                <Col md="6" className="bg-light row rounded center">
                    <Form className="container" onSubmit={submit}>
                        <h1 className="col-12 text-center my-3">Login</h1>
                        <FormGroup className="col-12 row mt-5">
                            <Label className="col-2 mt-2">CPF : </Label>
                            <Input className="col-10" type="number" value={cpf} onChange={(e) => setCpf(e.target.value)}></Input>
                        </FormGroup>
                        <FormGroup className="col-12 row mt-5">
                            <Label className="col-2 mt-2">Senha : </Label>
                            <Input className="col-10" type="password" value={pass} onChange={(e) => setPass(e.target.value)}></Input>
                        </FormGroup>
                        <Button type="submit" className="btn text-light col-6 bg-primary offset-3 mt-5 mb-5">Entrar</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Price2