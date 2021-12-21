import type { NextPage } from 'next';
import { BeerCard, Error, Loading } from '../../components';
import { useBeerData } from '../../hooks/useBeerData';
import { Beer } from '../../types/Beer';

const StoutsBeerPage: NextPage = () => {
  const name = 'stouts';
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Beer</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`stouts-beer-list-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default StoutsBeerPage;
