import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";


const index = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/funcionarios").then((resultado) => {
      setFuncionarios(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      axios.delete("/api/funcionarios/" + id);
      getAll();
    }
  }

  return (
    <Pagina titulo="Funcionarios">
      <Link href="/funcionarios/form" className="mb-2 btn btn-dark">
    
        Novo
      </Link>
      <Table responsive="sm">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={"/funcionarios/" + item.id}>
                  <BsPencilFill title="Alterar" className="text-primary" />
                </Link>
                <BsFillTrash3Fill
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.matricula}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
