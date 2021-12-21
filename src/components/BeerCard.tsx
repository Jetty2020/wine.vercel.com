import { Beer } from "../types/Beer";


interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, location } = beerData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
    </div>
  );
};
