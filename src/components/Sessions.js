import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Session from "./SessionsContent";
import Footer from "./Footer";
//import { Link } from "react-router-dom";

export default function Sessions() {
  const { idSessions } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idSessions}/showtimes`
    );

    promise.then((res) => {
      setSessions(res.data.days);
    });
  }, []);

  return (
    <Container>
      <div className="sessionsMovie">
        <header>
          <h1>Selecione o horário</h1>
        </header>
        <div className="dates-session">
          {sessions.map((s) => (
            <Session
              id={s.id}
              date={s.date}
              weekday={s.weekday}
              showtimes={s.showtimes}
            />
          ))}
        </div>
      </div>
      <Footer />
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

  .sessionsMovie {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    

  }
  header {
    width: 374px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
  .dates-session {
    width: 241px;
    height: 35px;

    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;

    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 117px;

    color: #293845;
  }
`;
