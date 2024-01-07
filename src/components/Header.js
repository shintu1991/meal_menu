import '../Header.css';

const Header = () => {
    
    return (
        <div className='header'>
         <h1 className="app-name"> The meal menu</h1>
            <navLink className="nav-bar">
                <ul className="nav-header">
                    <li> Home</li>
                    <li> Menu </li>
                    <li> About</li>
                    <li> Contact</li>
                </ul>
            </navLink>
           
        </div>
    );
};

export default Header;