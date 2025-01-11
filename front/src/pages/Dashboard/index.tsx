// Library
import { useState } from 'react';

// Local
import Footer from './Footer';
import Header from './Header';
import routes from './router';
import { DashboardContext } from './context';
import DynamicBackground from 'components/DynamicBackground';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const Page = routes.find((route) => route.title === currentPage)?.page;

  const contextValue = {
    currentPage,
    setCurrentPage,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      <div className='flex flex-col w-full h-screen items-center justify-center'>
        <DynamicBackground />

        <div className='w-5/6 h-screen'>
          <Header />

          {Page && <Page />}

          <Footer />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
