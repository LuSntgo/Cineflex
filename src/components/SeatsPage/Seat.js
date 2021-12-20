import styled from "styled-components";
import { useState } from "react";

export default function Seat({ id, isAvailable, name, userSeat, setUserSeat }) {
  let color, border;
  const [isPicked, setPicked] = useState(false);

   border = !isAvailable ?  "#f7c52b" : isPicked ? "#1aae9e" : "#7b8b99" ;
    color = !isAvailable ?  "#fbe192" : isPicked ? "#8DD7CF" : "#C3CFD9" ;

  return (
    <Container>
      <div className="content">
        <SelectSeats
          color={color}
          border={border}
          onClick={() => {
            if (isPicked === false && isAvailable === true) {
              setPicked(true);
              setUserSeat([...userSeat, id]);
            } else if (isAvailable === true) {
              setPicked(false);
            } else {
              alert("Esse assento não está disponível =(")
            }
          }}
        >
          <p>{name}</p>
      </SelectSeats>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
const SelectSeats = styled.div `
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background: ${(props)=> props.color};
    border: 1px solid ${(props)=> props.border};
    margin-bottom: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
`
