import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";

const index = () => {
  const [cabelos, setCabelos] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/cabelos").then((resultado) => {
      setCabelos(resultado.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      axios.delete("/api/cabelos/" + id);
      getAll();
    }
  }

  return (
    <Pagina titulo="Agenda">
      <Link href="/cabelos/form" className="mb-2 btn btn-dark">
        Novo
      </Link>
      <Table responsive="sm">
        <thead>
          <tr>
            <th></th>
            <th>Cliente</th>
            <th>Atendente</th>
          </tr>
        </thead>
        <tbody>
          {cabelos.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={"/cabelos/" + item.id}>
                  <BsPencilFill title="Alterar" className="text-primary" />
                </Link>{" "}
                <BsFillTrash3Fill
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.atendente}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
