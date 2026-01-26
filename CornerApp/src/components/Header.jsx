import './Header.css'
function Header( {storeName} ) {
  return (
    <header className="app-header">
        <h1 className="store-name">{storeName}</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Search</a>
          <a href="#" className="nav-link">Category</a>
          <a href="#" className="nav-link">Cart</a>
        </nav>
    </header>
  );
}

export default Header;