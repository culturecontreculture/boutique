// app/page.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('produits')
        .select('*')
        .eq('status', 'active');

      if (error) console.error('Error fetching products:', error);
      else setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl font-mono">Boutique Minimaliste</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <div key={product.id} className="border p-4">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}
