import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <header className="navbar">
         <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="" />
         <nav>
            <ul>
               <li>
                  <Link to="#">
                     <p>Types</p>
                     <img src="https://cdn-icons-png.flaticon.com/512/1033/1033134.png" alt="" />
                  </Link>
               </li>

               <li>
                  <Link to="#">
                     <p>Gens</p>
                     <img src="https://cdn-icons-png.flaticon.com/512/744/744104.png" alt="" />
                  </Link>
               </li>

               <li>
                  <Link to="#">
                     <p>About us</p>
                     <img src="https://cdn-icons-png.flaticon.com/512/287/287277.png" alt="" />
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Navbar;