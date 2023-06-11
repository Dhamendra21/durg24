import SportsCard from './Sportscard'
import Nav from './Nav';
function SportsNewsComponent() {
  const SportsnewsData = require('../news catagoryes/Sportsnews');
  const sportsNewsItems = [...SportsnewsData]; // Make a copy of the array using the spread operator

  return (
   <div >
         <Nav/>
      {sportsNewsItems.map((sportsNews) => (
        <SportsCard
          img={sportsNews.image}
          headline={sportsNews.title}
          description={sportsNews.description}
        />
      ))}
   
   </div>
  );
}

export default SportsNewsComponent;
