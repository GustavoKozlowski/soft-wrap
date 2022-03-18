import { Form, Button } from "react-bootstrap";

export default function addForm() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Nome *" required />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" placeholder="Idade *" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Estado civil *" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="CPF *" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Cidade *" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Estado *" />
        </Form.Group>
        <Button variant="sucess" type="submit" block>
          salvar
        </Button>
      </Form>
    </>
  );
}
