import styled from "styled-components";

export default function LabelSeats() {
return (
    <Container>
        <div className="label">
        <div className="seat-green"></div>
        <div className="seat-gray"></div>
        <div className="seat-yellow"></div>
      </div>
      <div className="label-text">
        <p>Selecionado</p>
        <p>Disponível</p>
        <p>Indisponível</p>
      </div>
    </Container>
)
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 75px;
    margin-bottom: 5px;
  }
  .label-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
  .seat-green {
    height: 25px;
    width: 25px;
    border-radius: 12px;
    background: #8dd7cf;
    border: 1px solid #1aae9e;
  }
  .seat-gray {
    height: 25px;
    width: 25px;
    border-radius: 12px;
    background: #c3cfd9;
    border: 1px solid #7b8b99;
  }
  .seat-yellow {
    height: 25px;
    width: 25px;
    border-radius: 12px;
    background: #fbe192;
    border: 1px solid #f7c52b;
  }
`