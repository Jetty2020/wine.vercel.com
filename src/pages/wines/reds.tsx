import { NextPage } from 'next';
import { WineContainer } from '../../components/wine';

const RedsPage: NextPage = () => {
  const name = 'reds';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default RedsPage;
