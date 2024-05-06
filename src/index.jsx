import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import ProductCard from './components/ProductCard';
import '@radix-ui/themes/styles.css';
import './index.css';

const element=document.querySelector('#root');
const root = createRoot(element);

root.render(
  <Theme>
    <ProductCard />
  </Theme>
)