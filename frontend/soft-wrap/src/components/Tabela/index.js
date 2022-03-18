import React from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

export default function Tabela({ pessoas }) {

  return (
    <>
      <h1>Tabela de Dados</h1>
     <div>
      <Button>
        Adicionar Cadastro
      </Button>
     </div>
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Estado Civil</th>
            <th>CPF</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((pessoa) => (
            <tr key={pessoa.id}>
              <td>{pessoa.id}</td>
              <td>{pessoa.nome}</td>
              <td>{pessoa.idade}</td>
              <td>{pessoa.estadoCivil}</td>
              <td>{pessoa.cpf}</td>
              <td>{pessoa.cidade}</td>
              <td>{pessoa.estado}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button variant="outline-success">Atualizar</Button>
                  <Button variant="outline-danger">Remover</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
