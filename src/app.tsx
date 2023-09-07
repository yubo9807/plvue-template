import { h, Fragment, Link, Router, createRouter } from "pl-vue";
import env from '~/config/env';
import Home from './pages/home';
import About from './pages/about';
import NotFound from "./pages/not-found";
import style from './style.module.scss';

const router = createRouter({
  base: env.BASE_URL,
  mode: 'hash',
  routes: [
    { path: '/', component: Home, },
    { path: '/about', component: About, },
    { component: NotFound, },
  ]
});


function App() {
  return <>
    <nav className={style.nav}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
    <Router />
  </>
}

export default App;
