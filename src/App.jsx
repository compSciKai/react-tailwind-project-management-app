import { useState } from 'react';

import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import NoProjectSelected from './components/NoProjectSelected';
import LearningReact from './components/Projects/LearningReact';

function App() {
  const [selected, setSelected] = useState('NoProjectSelected');

  const RenderedPage = () => {
    switch(selected) {
      case 'NoProjectSelected':
        return <NoProjectSelected />;
      case 'LearningReact':
        return <LearningReact />;
      // case 'MasteringReact':
      //   return <MasteringReact />;
      default:
        return <NoProjectSelected />;
    }
  };

  const handleSelectedPage = (selectedPage) => {
    setSelected(selectedPage);
    console.log(`selected: ${selectedPage}`)
  }

  return (
    <>
      <SideBar 
        onSelected={handleSelectedPage}
        selected={selected}
      />
      <MainContent>
        <RenderedPage />  
      </MainContent>
    </>
  );
}

export default App;
