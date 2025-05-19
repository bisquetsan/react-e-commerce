import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import { getProductById } from "../data/products";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900">
          Producto no encontrado
        </h2>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
