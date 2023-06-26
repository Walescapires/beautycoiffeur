import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import unhasValidator from '@/VALIDATORS/unhasValidator'
import axios from 'axios'

const form = () => {
    const { push } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  
    function salvar(dados) {
      axios.post("/api/unhas", dados)
      push("/unhas")
    }
  
    function handleChange(event) {
      const name = event.target.name
      const valor = event.target.value
      const mascara = event.target.getAttribute('mask')
  
      setValue(name, mask(valor, mascara))
    }

    return (
        <Pagina titulo="Agendamento">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Cliente </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='Insira o nome do cliente'
                        {...register('nome', unhasValidator.nome)} />
                    {errors.nome &&
                        <small className='error-message bg-primary text-white'>
                            {errors.nome.message}</small>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="atendente">
                    <Form.Label>Atendente </Form.Label>
                    <Form.Control
                        isInvalid={errors.atendente}
                        type="text"
                        placeholder='Insira o nome do atendente'
                        {...register('atendente', unhasValidator.atendente)} />
                    {errors.atendente &&
                        <small className='error-message bg-primary text-white'>
                            {errors.atendente.message}</small>}
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