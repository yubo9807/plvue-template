import { h, Fragment } from "pl-vue";
import { Link, Route, Router } from 'pl-vue/lib/router';
import Home from './pages/home';
import About from './pages/about';
import NotFound from "./pages/not-found";
import style from './style.module.scss';

export function App() {

  return <>
    <nav className={style.nav}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
    <Router notFound={NotFound}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  </>
}
