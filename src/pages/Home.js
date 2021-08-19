import getData from '../utils/getData';

const Home = async () => {
   const characters = await getData();
   const view = `
      <div class="characters">
         ${characters.results.map(character => `
            <article class="characters-item">
               <a href="#/${character.id}/">
                  <img src="${character.image}" alt="${character.name}">
               </a>
               <div class="portal-container">
                  <h2 class="character-name">${character.name}</h2>
               </div>
            </article>
         `).join('')}
      </div>
   `;
   return view;
};

export default Home;
