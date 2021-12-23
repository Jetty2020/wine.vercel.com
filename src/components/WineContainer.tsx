import { Error, Loading, WineCard } from './index';
import { useWineData } from '../hooks/useWineData';
import { Wine } from '../types/Wine';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../constants';

export const WineContainer = ({ name }: { name: string }) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <WineTitle>{name} wine</WineTitle>
      <WineCardContainer>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </WineCardContainer>
    </div>
  );
};

const WineTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;

const WineCardContainer = styled.main`
  display: grid;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
