import {
  PackageIcon,
  DollarSignIcon,
  ImageIcon,
  PlusCircleIcon,
} from 'lucide-react';
import { useProductStore } from '../store/useProductStore';

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  return (
    <dialog
      id="add_product_modal"
      className="modal p-0 backdrop:bg-ink/40 rounded-card"
    >
      <div className="bg-paper w-[min(28rem,90vw)] p-6">
        <h3 className="font-display text-xl mb-6">Add product</h3>
        <form onSubmit={addProduct} className="space-y-5">
          <div>
            <label className="field-label">Name</label>
            <div className="relative">
              <PackageIcon className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" />
              <input
                className="field-input pl-9"
                placeholder="Product name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label className="field-label">Price</label>
            <div className="relative">
              <DollarSignIcon className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" />
              <input
                type="number"
                min="0"
                step="0.01"
                className="field-input pl-9"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label className="field-label">Image URL</label>
            <div className="relative">
              <ImageIcon className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" />
              <input
                className="field-input pl-9"
                placeholder="https://…"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="btn-ghost"
              onClick={() =>
                document.getElementById('add_product_modal').close()
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={
                !formData.name || !formData.price || !formData.image || loading
              }
            >
              <PlusCircleIcon className="size-4" /> Add product
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
export default AddProductModal;
