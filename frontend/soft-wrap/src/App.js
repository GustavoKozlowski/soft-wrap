import Tabela from "./components/Tabela";

export default function App() {
  const dados = [
    {
      id: 1,
      nome: "Gustavo Kozlowski",
      idade: 25,
      estadoCivil: "solteiro",
      cpf: "158.457.896-50",
      cidade: "Rio de Janeiro",
      estado: "Rio de Janeiro",
    },
    {
      id: 2,
      nome: "J.Cole",
      idade: 35,
      estadoCivil: "solteiro",
      cpf: "158.457.896-50",
      cidade: "Taubaté",
      estado: "São Paulo",
    },
    {
      id: 3,
      nome: "Vovô Jones",
      idade: 50,
      estadoCivil: "solteiro",
      cpf: "158.457.896-50",
      cidade: "L.A",
      estado: "Califónia",
    },
  ];
  return (
    <>
      <Tabela pessoas={dados} />
    </>
  );
}

