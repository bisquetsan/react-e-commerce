import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getProducts } from "../data/products";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        // Seleccionamos 4 productos aleatorios para mostrar
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.slice(0, 4));
        console.log(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            Bienvenido a nuestra tienda
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl">
            Los mejores productos al mejor precio
          </p>
          <Link
            to="/category/1"
            className="mt-8 inline-block bg-white text-primary px-8 py-3 border border-transparent rounded-md font-medium hover:bg-gray-100"
          >
            Ver productos
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Productos destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/item/${product.id}`}>
                <div className="p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-gray-600">${product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Explora nuestras categorías
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/electronics"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Electrónica
                </h3>
                <p className="text-gray-600">
                  Los últimos dispositivos tecnológicos
                </p>
              </div>
            </Link>

            <Link
              to="/clothing"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ropa
                </h3>
                <p className="text-gray-600">Moda para todas las ocasiones</p>
              </div>
            </Link>

            <Link
              to="/home-goods"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hogar
                </h3>
                <p className="text-gray-600">Todo para tu hogar</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
