import Pagina from "@/components/Pagina";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get("/api/cabelos/" + query.id).then((resultado) => {
        const disciplina = resultado.data;

        for (let atributo in cabelo) {
          setValue(atributo, cabelo[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put("/api/cabelos/" + query.id, dados);
    push("/cabelos");
  }

  return (
    <Pagina titulo="Cabelos">
      <Form>
        <Form.Group className="mb-3" controlId="cliente">
          <Form.Label>Cliente </Form.Label>
          <Form.Control type="text" {...register("cliente")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="atendente">
          <Form.Label>Atendente </Form.Label>
          <Form.Control type="text" {...register("atendente")} />
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
