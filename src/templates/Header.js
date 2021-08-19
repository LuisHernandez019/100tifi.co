const Header = () => {
   const view = `
      <header class="header-main">
         <div class="header-logo">
            <a href="#">
               <img src="src/assets/img/logo.png">
            </a>
         </div>
         <nav class="header-nav">
            <a href="#/about/" class="nav-element">About</a>
         </nav>
      </header>
   `;
   return view;
};

export default Header;