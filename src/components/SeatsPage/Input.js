import styled from "styled-components";


export default function InputUser({post}) {
  return (
    <Container>
      <form>
        <p>Nome do comprador: </p>
        <input type="text" placeholder="Digite seu nome..." />
        <p>CPF do comprador: </p>
        <input type="number" placeholder="Digite seu CPF..." />
      </form>
      <button onClick={() => post()}>Reservar assento(s)</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  p {
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;

    margin-bottom: 6px;
  }
  input {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 3px;
    text-indent: 10px;

    width: 327px;
    height: 51px;
    margin-bottom: 10px;
  }
  button {
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    border: none;
    margin-top: 20px;

    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;
