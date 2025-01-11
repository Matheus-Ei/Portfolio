// Library
import { useState } from 'react';

// Local
import Footer from './Footer';
import Header from './Header';
import routes from './router';
import { DashboardContext } from './context';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const Page = routes.find((route) => route.title === currentPage)?.page;

  const contextValue = {
    currentPage,
    setCurrentPage,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      <div>
        <Header />

        {Page && <Page />}

        <Footer />
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
