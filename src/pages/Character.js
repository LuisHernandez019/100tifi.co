import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
   const id = getHash();
   const character = await getData(id);
   const view = `
      <section class="character-inner">
         <article class="character-card">
            <img src="${character.image}" alt="${character.name}">
            <div class="portal-container">
               <h2 class="character-name">${character.name}</h2>
            </div>
         </article>
         <article class="character-description">
            <h3>• Episodes: <span>${character.episode.length}</span></h3>
            <h3>• Status: <span>${character.status}</span></h3>
            <h3>• Species: <span>${character.species}</span></h3>
            <h3>• Gender: <span>${character.gender}</span></h3>
            <h3>• Origin: <span>${character.origin.name}</span></h3>
            <h3>• Last Location: <span>${character.location.name}</span></h3>
         </article>
      </section>
   `;
   return view;
};

export default Character;