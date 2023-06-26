import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import cabelosValidator from "@/VALIDATORS/cabelosValidator";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    axios.post("/api/cabelos", dados);
    push("/cabelos");
  }

  return (
    <Pagina titulo="Atendimento">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            isInvalid={errors.nome}
            type="text"
            placeholder='Insira o nome do cliente'
            {...register("nome", cabelosValidator.nome)} />
          {errors.nome &&
            <small className='error-message bg-primary text-white'>
              {errors.nome.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="atendente">
          <Form.Label>Atendente</Form.Label>
          <Form.Control
            isInvalid={errors.curso}
            type="text"
            placeholder="Insira o nome do funcionário"
            {...register("atendente", cabelosValidator.curso)} />
          {errors.atendente &&
            <small className='error-message bg-primary text-white'>
              {errors.atendente.message}</small>}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/cabelos">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
