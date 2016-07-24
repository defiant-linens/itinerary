var App = props => (
  <div>
    <header> 
      <h1><Link to='/landing'>Wonder Wander</Link></h1>
      <nav>
        <button><Link to='/login'>Log in</Link></button>
        <button><Link to='/signup'>Sign up</Link></button>
      </nav>
    </header>
    {props.children}
  </div>
);