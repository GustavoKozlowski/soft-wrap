import React from "react";
import { useEffect, useState } from "react";
import { Table, ButtonGroup, Button, Modal } from "react-bootstrap";
import AddForm from "../AddForm";
import { db } from "../../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Tabela({ pessoas }) {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "teste");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <h1>Tabela de Dados</h1>
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
      
      <Modal>
        <Modal.Header>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
