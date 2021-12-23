import { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const WhitesPage: NextPage = () => {
  const name = 'whites';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default WhitesPage;
