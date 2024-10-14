import '../style/Navigation.css';
import Logo from './Logo';
import NavButtons from './NavButtons';

function Navigation() {
  return (
    <nav>
      <div>
        <Logo />
      </div>
      
      <div>
        <NavButtons />
      </div>
    </nav>
  );
}

export default Navigation;