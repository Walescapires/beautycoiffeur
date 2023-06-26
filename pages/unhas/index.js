import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {
    const [unhas, setUnhas] = useState([]);
  
    useEffect(() => {
      getAll();
    }, []);
  
    function getAll() {
      axios.get("/api/unhas").then((resultado) => {
        setUnhas(resultado.data);
      });
    }
  
    function excluir(id) {
      if (confirm("Deseja realmente excluir o registro?")) {
        axios.delete("/api/unhas/" + id);
        getAll();
      }
    }

    return (
        <Pagina titulo="Agenda">

            <Link href="/unhas/form" className='mb-2 btn btn-dark'>
                Novo
            </Link>

            <Table responsive="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Atendente</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {unhas.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/unhas/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.atendente}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index