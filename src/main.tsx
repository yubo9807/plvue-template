import { h, Fragment, render } from "pl-vue";
import { Link, Route, Router, initRouter } from 'pl-vue/lib/router';
import env from '~/config/env';
import Home from './pages/home';
import About from './pages/about';
import NotFound from "./pages/not-found";
import style from './style.module.scss';

function App() {
  const router = initRouter({
    base: env.BASE_URL,
    mode: 'hash',
  });

  return <>
    <Router notFound={NotFound}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
    <nav className={style.nav}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  </>
}

const root = document.getElementById('root')
root.appendChild(render(<App />));
