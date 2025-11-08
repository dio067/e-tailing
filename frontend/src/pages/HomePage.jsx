import { useEffect } from 'react';
import { PackageIcon, PlusCircleIcon, RefreshCwIcon } from 'lucide-react';
import { useProductStore } from '../store/useProductStore';
import ProductCard from '../components/ProductCards';
import AddProductModal from '../components/AddProductModal';

function HomePage() {
  const { products, loading, error, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
            Inventory
          </p>
          <h1 className="font-display text-3xl mt-1">Catalog</h1>
        </div>
        <div className="flex gap-2">
          <button className="icon-btn" onClick={fetchProducts}>
            <RefreshCwIcon className="size-5" />
          </button>
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById('add_product_modal').showModal()
            }
          >
            <PlusCircleIcon className="size-4" /> Add product
          </button>
        </div>
      </div>

      <AddProductModal />

      {error && (
        <div className="border border-danger/30 text-danger text-sm rounded-sm px-4 py-3 mb-6">
          {error}
        </div>
      )}

      {!loading && products.length === 0 && (
        <div className="empty-state">
          <PackageIcon className="size-10 text-ink-soft mb-4" />
          <h3 className="font-display text-2xl">No products yet</h3>
          <p className="text-ink-soft mt-1 max-w-sm">
            Add your first item to start building the catalog.
          </p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-24">
          <span className="font-mono text-sm text-ink-soft">Loading…</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
export default HomePage;
