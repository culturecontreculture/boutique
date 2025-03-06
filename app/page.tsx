'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase/supabaseClient';

// Définir un type pour les produits
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  status: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('produits')
        .select('*')
        .eq('status', 'active');

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        // Typage explicite des données
        setProducts(data as Product[]);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl font-mono">Boutique Minimaliste.</h1>
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
