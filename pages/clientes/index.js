import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";

const index = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/clientes").then((resultado) => {
      setClientes(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      axios.delete("/api/clientes/" + id);
      getAll();
    }
  }

  return (
    <Pagina titulo="Clientes">
      <Link href="/clientes/form" className="mb-2 btn btn-dark">
        Novo
      </Link>
      <Table responsive="sm">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={"/clientes/" + item.id}>
                  <BsPencilFill title="Alterar" className="text-primary"/>
                </Link>
                <BsFillTrash3Fill
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
