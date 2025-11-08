import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SaveIcon } from 'lucide-react';
import { useProductStore } from '../store/useProductStore';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    currentProduct,
    formData,
    setFormData,
    fetchProduct,
    updateProduct,
    loading,
  } = useProductStore();

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id);
    navigate('/');
  };

  if (!currentProduct && loading) {
    return (
      <div className="empty-state">
        <span className="font-mono text-sm text-ink-soft">Loading…</span>
      </div>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <button onClick={() => navigate('/')} className="btn-ghost mb-6 -ml-3">
        <ArrowLeftIcon className="size-4" /> Back to catalog
      </button>
      <h1 className="font-display text-3xl mb-8">Edit product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="field-label">Name</label>
          <input
            className="field-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="field-label">Price</label>
          <input
            type="number"
            min="0"
            step="0.01"
            className="field-input"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>
        <div>
          <label className="field-label">Image URL</label>
          <input
            className="field-input"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          <SaveIcon className="size-4" /> Save changes
        </button>
      </form>
    </main>
  );
}
export default ProductPage;
