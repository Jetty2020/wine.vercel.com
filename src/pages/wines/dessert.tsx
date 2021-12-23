import type { NextPage } from 'next';
import { WineContainer } from '../../components/wine';

const DessertPage: NextPage = () => {
  const name = 'dessert';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default DessertPage;
