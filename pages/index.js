// Update: pages/index.js with filter/sort/pagination and URL sync
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

export async function getServerSideProps(context) {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  const categoriesRes = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await categoriesRes.json();

  return { props: { products, categories } };
}

export default function Home({ products, categories }) {
  const router = useRouter();
  const { query } = router;

  const [searchTerm, setSearchTerm] = useState(query.search || '');
  const [selectedCategory, setSelectedCategory] = useState(query.category || 'all');
  const [maxPrice, setMaxPrice] = useState(query.maxPrice || '');
  const [sortOrder, setSortOrder] = useState(query.sort || 'default');
  const [currentPage, setCurrentPage] = useState(parseInt(query.page) || 1);
  const productsPerPage = 6;

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (sortOrder !== 'default') params.set('sort', sortOrder);
    if (currentPage !== 1) params.set('page', currentPage);
    router.push({ pathname: '/', query: Object.fromEntries(params.entries()) }, undefined, { shallow: true });
  }, [searchTerm, selectedCategory, maxPrice, sortOrder, currentPage]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setMaxPrice('');
    setSortOrder('default');
    setCurrentPage(1);
  };

  let filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (sortOrder === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 w-full md:w-1/2 rounded"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded w-full md:w-1/4"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded w-full md:w-1/4"
          />

          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded w-full md:w-1/4"
          >
            <option value="default">Sort by</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <button
          onClick={resetFilters}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          Reset Filters
        </button>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 mt-6">
        <aside className="md:w-1/4 mb-4 md:mb-0">
          <FilterSidebar />
        </aside>
        <main className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
