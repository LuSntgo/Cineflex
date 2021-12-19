import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({ weekday, date, showtimes }) {
  return (
    <Container>
      <div className="day">
        <h2>
          {weekday} - {date}
        </h2>
      </div>
      <div className="showtime">
        <Link className="Link" to={`/assentos/${showtimes[0].id}`}>
          <h3>{showtimes[0].name}</h3>
        </Link>
        <Link className="Link" to={`/assentos/${showtimes[1].id}`}>
          <h3>{showtimes[1].name}</h3>
        </Link>

      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  margin-left: 23px;
  

  .day {
    height: 35px;

    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;
  }
  .showtime{
    display: flex;
    gap: 10px;

    flex-direction: row;
    margin-bottom: 20px;
  }
  .Link {
    width: 83px;
    height: 43px;

    line-height: 21px;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: #ffffff;

    background-color: #e8833a;
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

  }
`;
