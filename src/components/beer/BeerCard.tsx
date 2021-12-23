import styled from "@emotion/styled";
import Image from "next/image";
import { Beer } from "../../types/Beer";


interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, location, image, rating } = beerData;
  return (
    <Container>
      <Image src={image} alt="Beer-Imge" />
      <h2>
        {name}
        <Average>{rating.average?.toFixed(2)}</Average>
      </h2>
      <p>
        {location}
      </p>
      <p>
        리뷰수:
        {rating.reviews}
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;

const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color: white;
  background: #2ac1bc;
  border-radius: 3px;
`;
