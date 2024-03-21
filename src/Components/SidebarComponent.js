import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Sidebar } from 'flowbite-react';
import { HiMenu, HiPlus, HiDocument, HiLogout, HiHome } from 'react-icons/hi';
import favicon from '../Assets/logo.png';

function SidebarComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = () => {
    if (!isLargeScreen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="h-144 flex flex-col relative z-10">
      <div className="lg:hidden bg-gray-900 text-white w-full p-4 absolute top-0 left-0">
        <HiMenu className="text-2xl cursor-pointer" onClick={handleToggleSidebar} />
      </div>
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className={`bg-gray-900 text-white flex-shrink-0 lg:block absolute inset-y-0 left-0 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: '280px' }}
      >
        <Sidebar.Logo href="#" className="p-4 text-left">
          <div className='flex flex-row'>
            <img src={favicon} alt="Flowbite logo" className="h-6 w-auto" /> 
            <span>LegalChain</span>
          </div>
        </Sidebar.Logo>
        <Sidebar.Items className="p-4">
          <Sidebar.ItemGroup>
            <Link to="/" className="flex items-center py-4 px-4 text-lg SidebarItem" onClick={handleSidebarItemClick}>
              <div className='flex flex-row py-4'>
                <HiHome className="mr-3 text-2xl" />
                <span className="w-24 text-xl">Home</span>
              </div>
            </Link>
            <Link to="/add-docs" className="flex items-center py-4 px-4 text-lg SidebarItem" onClick={handleSidebarItemClick}>
              <div className='flex flex-row py-4'>
                <HiPlus className="mr-3 text-2xl" />
                <span className="w-24 text-xl">Add Docs</span>
              </div>
            </Link>
            <Link to="/retrieve" className="flex items-center py-4 px-4 text-lg SidebarItem" onClick={handleSidebarItemClick}>
              <div className='flex flex-row py-4'>
                <HiDocument className="mr-3 text-2xl" />
                <span className="w-24 text-xl">Retrieve</span>
              </div>
            </Link>
            <Link to="/logout" className="flex items-center py-4 px-4 text-lg SidebarItem" onClick={handleSidebarItemClick}>
              <div className='flex flex-row py-4'>
                <HiLogout className="mr-3 text-2xl" />
                <span className="w-24 text-xl">Logout</span>
              </div>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SidebarComponent;
