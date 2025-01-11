// Local
import useSafeContext from 'hooks/useSafeContext';
import { DashboardContext } from '../context';
import routes from '../router';

const Header = () => {
  const tabs = routes.map((route) => route.title);
  const { currentPage, setCurrentPage } = useSafeContext(DashboardContext);

  const changeTab = (tab: string) => setCurrentPage(tab);

  const renderTabs = (tab: string) => (
    <button
      key={tab}
      className={`text-lg hover:italic ${tab === currentPage ? 'text-primary' : 'text-base-content'}`}
      onClick={() => changeTab(tab)}
    >
      {tab}
    </button>
  );

  return (
    <div className='flex items-center relative top-0 w-full h-16'>
      <h1 className='font-bold text-3xl'>PORTFOLIO</h1>

      <div className='absolute right-0 flex gap-x-4'>
        {tabs.map(renderTabs)}
      </div>

      <div className='absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-base-100 via-primary via-15% to-base-100' />
    </div>
  );
};

export default Header;
