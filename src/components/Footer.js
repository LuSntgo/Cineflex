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
  width: 100%;
  height: 117px;
  background: #c3cfd9;
  z-index: 30;
  bottom: 0;
  left: 0;
  display: flex;

  .poster {
    width: 64px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  img {
    width: 48px;
    height: 72px;
  }
  .title {
    width: 80%;
    height: 80px;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;
