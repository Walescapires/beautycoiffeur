import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import { Container } from 'react-bootstrap'

const Pagina = (props) => {
  return (
    <>
    <Cabecalho />
    <div>
        <Container>
            <h1>{props.titulo}</h1>
        </Container>
    </div>

    <Container className='mb-5 pb-4'>
        {props.children}
    </Container>

      
    </>
  )
}

export default Pagina