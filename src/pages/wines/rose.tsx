import { NextPage } from 'next';
import { WineContainer } from '../../components/wine';


const RosePage: NextPage = () => {
  const name = 'rose';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default RosePage;
