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
      axios.get("/api/funcionarios/" + query.id).then((resultado) => {
        const funcionarios = resultado.data;
        for (let atributo in funcionarios) {
          setValue(atributo, funcionarios[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put("/api/funcionarios/" + query.id, dados);
    push("/funcionarios");
  }

  return (
    <Pagina titulo="Funcionarios">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula </Form.Label>
          <Form.Control type="text" {...register("matricula")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="text" {...register("email")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone </Form.Label>
          <Form.Control type="text" {...register("telefone")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cargo">
          <Form.Label>Cargo </Form.Label>
          <Form.Control type="text" {...register("cargo")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/funcionarios">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
