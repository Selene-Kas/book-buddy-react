import { Link } from 'react-router-dom'

const Navigations = () => {
    return (
       <nav>
         <ul id="navigations" >{/* navigation here */}
            <li>
              <Link to="/"><h3 className="books"> Books </h3></Link>
            </li>
            <li>
              <Link to="/singleBook"><h3> Single Book </h3></Link>
            </li>
            <li>
              <Link to="/account"><h3> Account </h3></Link>
            </li>
            <li>
              <Link to="/login"><h3> Login </h3></Link>
            </li>
            <li>
              <Link to="/register"><h3> Register </h3></Link>
            </li>
          </ul>
      </nav>  
    );
  }
  
  export default Navigations;