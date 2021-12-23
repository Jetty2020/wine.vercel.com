import { BeerCard } from './index';
import { useBeerData } from '../../hooks/useBeerData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { Error, Loading } from '../common';
import { Beer } from '../../types/Beer';

export const BeerContainer = ({ name }: { name: string }) => {
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <BeerTitle>{name} beer</BeerTitle>
      <BeerCardContainer>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`${name}-beer-list-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </BeerCardContainer>
    </div>
  );
};

const BeerTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;

const BeerCardContainer = styled.main`
  display: grid;
  gap: 1em;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
