import { EditIcon, Trash2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';

function ProductCard({ product }) {
  const { deleteProduct } = useProductStore();
  return (
    <div className="tag-card">
      <span className="tag-punch" />
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 border-t border-dashed border-line">
        <h3 className="font-display text-lg leading-snug">{product.name}</h3>
        <p className="font-mono text-xl text-primary mt-1">
          ${Number(product.price).toFixed(2)}
        </p>
        <div className="flex gap-2 mt-4">
          <Link to={`/product/${product.id}`} className="btn-outline flex-1">
            <EditIcon className="size-4" /> Edit
          </Link>
          <button
            className="btn-danger"
            onClick={() => deleteProduct(product.id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
