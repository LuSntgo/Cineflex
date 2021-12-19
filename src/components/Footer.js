import styled from "styled-components";

export default function Footer({ title, posterURL }) {
  return (
    <Container>
      <div className="poster">
        <img src={posterURL}></img>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  padding-top: 60px;
  width: 100%;
  height: 117px;
  background: #c3cfd9;
  z-index: 30;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
