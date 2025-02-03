import React from 'react';
import ProductCard from './ProductCard';
import '../css/ProductList.css';

const products = [
  { id: 1, title: 'Teen Patti', description: 'A highly animated card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xvwHeQNy8Y7Smg-kgTTwd-0rSPJxmZGj1w&s' },
  { id: 2, title: 'Rummy', description: 'Skill based card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiIzLk08NCe6nL7_cGu3qQtEcK7B-Bs59bQ&s' },
  { id: 3, title: 'Chess', description: 'Mindfull Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxUGGHNpXI8RsGSakUjBQcYHHtRd-S-XVXw&s' },
  { id: 4, title: 'Ludo', description: 'Entertainment Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0O8lh9ch00N4513ESInsjF007Xo60XYh-A&s' },
  { id: 1, title: 'Teen Patti', description: 'A highly animated card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xvwHeQNy8Y7Smg-kgTTwd-0rSPJxmZGj1w&s' },
  { id: 2, title: 'Rummy', description: 'Skill based card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiIzLk08NCe6nL7_cGu3qQtEcK7B-Bs59bQ&s' },
  { id: 3, title: 'Chess', description: 'Mindfull Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxUGGHNpXI8RsGSakUjBQcYHHtRd-S-XVXw&s' },
  { id: 4, title: 'Ludo', description: 'Entertainment Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0O8lh9ch00N4513ESInsjF007Xo60XYh-A&s' },
  { id: 1, title: 'Teen Patti', description: 'A highly animated card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xvwHeQNy8Y7Smg-kgTTwd-0rSPJxmZGj1w&s' },
  { id: 2, title: 'Rummy', description: 'Skill based card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiIzLk08NCe6nL7_cGu3qQtEcK7B-Bs59bQ&s' },
  { id: 3, title: 'Chess', description: 'Mindfull Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxUGGHNpXI8RsGSakUjBQcYHHtRd-S-XVXw&s' },
  { id: 4, title: 'Ludo', description: 'Entertainment Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0O8lh9ch00N4513ESInsjF007Xo60XYh-A&s' },
  { id: 1, title: 'Teen Patti', description: 'A highly animated card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xvwHeQNy8Y7Smg-kgTTwd-0rSPJxmZGj1w&s' },
  { id: 2, title: 'Rummy', description: 'Skill based card game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiIzLk08NCe6nL7_cGu3qQtEcK7B-Bs59bQ&s' },
  { id: 3, title: 'Chess', description: 'Mindfull Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxUGGHNpXI8RsGSakUjBQcYHHtRd-S-XVXw&s' },
  { id: 4, title: 'Ludo', description: 'Entertainment Game', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0O8lh9ch00N4513ESInsjF007Xo60XYh-A&s' },
];
const ProductList = () => {
  return (
    <section className="product-list" id='ready-projects'>
      <h1 className="section-title">Ready to Go Projects</h1>
      <br/>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
