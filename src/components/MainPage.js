import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v4/cineflex/movies"
    );
    promise.then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <Container>
      <div className="title">
        <h1>Selecione o filme</h1>
      </div>
      <div className="movies">
        {movies.map((movie) => (
          <div className="poster" key={movie.id}>
            <Link to={`/sessoes/${movie.id}`}>
            <img src={movie.posterURL}></img>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 110px;
  top: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .movies {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 38px;
    margin-right: 38px;
    gap: 38px;
  }

  .title {
    width: 374px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 55px;
    padding-top: 55px;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
  .poster {
    height: 209px;
    width: 145px;
    box-shadow: 0px 2px 4px 2px #0000001a;

    border-radius: 3px;

    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 129px;
    height: 193px;
  }
`;
