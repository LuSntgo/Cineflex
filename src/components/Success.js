import styled from "styled-components";

export default function Success() {
return (
    <Container>
    <div className="title">
      <h1>Pedido feito com sucesso!</h1>
    </div>
    <div className="info-movie">
        <h3>Filme e sessão</h3>
        <p>nome do filme</p>
        <p>dia e hora</p>   
    </div>
    <div className="ticket">
        <h3>Ingressos</h3>
        <p>nome do filme</p>
        <p>dia e hora</p>
    </div>
    <div className="user">
        <h3>comprador</h3>
        <p>nome</p>
        <p>cpf</p>
    </div>
    <button>Voltar pra Home</button>
    </Container>
)
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
 
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