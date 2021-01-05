import React, { useContext } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
   const { isLoading } = useContext(GithubContext);

   if (isLoading) {
      return (
         <main>
            <Navbar />
            <Search />
            <section className="section">
               <img src={loadingImage} alt="loading" className="loading-img" />
            </section>
         </main>
      )
   }
   return (
      <main>
         <Navbar />
         <Search />
         <Info />
         <User />
         <Repos />
      </main>
   );
};

export default Dashboard;
