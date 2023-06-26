import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const form = () => {
    const { push, query } = useRouter();
    const { register, handleSubmit, setValue } = useForm();
  
    useEffect(() => {
      if (query.id) {
        axios.get("/api/unhas/" + query.id).then((resultado) => {
          const unhas = resultado.data;
          for (let atributo in unha) {
            setValue(atributo, unhas[atributo]);
          }
        });
      }
    }, [query.id]);
  
    function salvar(dados) {
      axios.put("/api/unhas/" + query.id, dados);
      push("/unhas");
    }

    return (
        <Pagina titulo="Agenda">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Cliente</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="atendente">
                    <Form.Label>Atendente </Form.Label>
                    <Form.Control type="text" {...register('atendente')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/unhas">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form

