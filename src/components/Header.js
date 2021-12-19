import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>CINEFLEX</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  z-index: 30;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  
  h1 {
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #e8833a;
  }
`;
