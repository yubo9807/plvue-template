import { h, ref } from 'pl-vue';
import useStore from '@/store/count';

function Home() {
  const store = useStore();
  const count = ref(0);

  return <div>
    <h1>{() => count.value}</h1>
    <button onclick={() => count.value++}>count ++</button>
    <h1>{() => store.count}</h1>
    <button onclick={store.addCount}>store.count++</button>
  </div>
}

export default Home;
