import type { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const DessertPage: NextPage = () => {
  const name = 'dessert';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default DessertPage;
