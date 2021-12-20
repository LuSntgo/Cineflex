import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Seat from "./Seat";
import LabelSeats from "./Label-Seats";
import InputUser from "./Input";
import Footer from "../Footer"
//import { Link } from "react-router-dom";

export default function Seats() {
  const [seat, setSeats] = useState([]);
  const { idSessions } = useParams();
  const [isFooter, setFooter] = useState([]);
  const [userSeat, setUserSeat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessions}/seats`
    );

    promise.then((res) => {
      setSeats(res.data.seats);
      setFooter(res.data);
    });
  }, []);

function postSeat(){
  const promise = axios.post(
    "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many");
    
    promise.then(() => {
      navigate("/sucesso");
    });    
  }

  return (
    <Container>
      <div className="select">
        <h1>Selecione o(s) assento(s)</h1>
      </div>
      <div className="seats">
        {seat.map((s) => (
          <Seat
            key={s.id}
            isAvailable={s.isAvailable}
            id={s.id}
            name={s.name}
            userSeat={userSeat}
            setUserSeat={setUserSeat}
          />
        ))}
      </div>
      <LabelSeats />
      <InputUser post={postSeat} />
      <Footer   
      time={seat.name}
        day={seat.day.weekday}
        title={seat.movie.title}
        img={seat.movie.posterURL}
        key={seat.movie.id} />
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .seats {
    width: 330px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 7px;
    margin-bottom: 5px;
  }
  .select {
    width: 100%;
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
`;
