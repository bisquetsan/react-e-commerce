import { useState, useEffect } from "react";
import type { Product } from "../../types/types";

interface SearchAndFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const SearchAndFilter = ({ products, onFilter }: SearchAndFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    applyFilters();
  }, [searchTerm, sortOption, products]);

  const applyFilters = () => {
    let filtered = [...products];

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar productos
    if (sortOption) {
      filtered.sort((a, b) => {
        switch (sortOption) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
    }

    onFilter(filtered);
  };

  return (
    <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Buscador */}
        <div className="w-full md:w-1/2">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Buscar productos
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              id="search"
              className="block w-full rounded-md border-gray-300 pl-4 pr-12 py-2 border focus:ring-primary focus:border-primary"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Filtro de ordenación */}
        <div className="w-full md:w-1/3">
          <label
            htmlFor="sort"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ordenar por
          </label>
          <select
            id="sort"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 border focus:ring-primary focus:border-primary"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Seleccionar...</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
