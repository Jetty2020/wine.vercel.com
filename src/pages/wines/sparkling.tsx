import { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const SparklingPage: NextPage = () => {
  const name = 'sparkling';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default SparklingPage;
