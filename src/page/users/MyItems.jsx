import React, { useState, useEffect } from 'react';
import { ShoppingCart, Edit, Trash2, Filter, Search, Plus } from 'lucide-react';

function InventoryManagement() {
  // Sample data based on the image
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('Low in stock');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch products
    setTimeout(() => {
      const dummyProducts = Array(10).fill().map((_, index) => ({
        id: index + 1,
        name: 'Indomie 40g',
        category: 'Edibles',
        supplier: 'JJ Ltd',
        quantity: 40,
        quantityUnit: '(360 pieces)',
        status: index % 3 === 1 ? 'Requisition' : (index % 3 === 2 ? 'Adequate' : 'Low stock'),
        reorderLevel: 40,
        reorderUnit: '(220 pieces)',
        image: '/placeholder/50/50' // Placeholder for Indomie image
      }));
      
      setProducts(dummyProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(products.map(product => product.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleUpdate = (id) => {
    console.log(`Update product with ID: ${id}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Low stock':
        return 'bg-red-100 text-red-600';
      case 'Requisition':
        return 'bg-gray-200 text-gray-600';
      case 'Adequate':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Filter products based on selected filter and search term
  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'All products' || product.status.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      {/* Header area */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="All products">All products</option>
              <option value="Low in stock">Low in stock</option>
              <option value="In requisition">In requisition</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter size={14} />
            </div>
          </div>
          <span className="ml-3 text-gray-500 text-sm">({filteredProducts.length} products)</span>
        </div>

        <div className="flex items-center w-full md:w-auto">
          <div className="relative mr-2 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-8 pr-3 py-2 border border-gray-300 rounded-md w-full md:w-64 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm flex items-center">
            <Plus size={16} className="mr-1" />
            Create requisition
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-10 px-3 py-3 text-left">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={handleSelectAll}
                  checked={selectedItems.length === products.length && products.length > 0}
                />
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reorder level
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan="8" className="px-3 py-4 text-center text-sm text-gray-500">
                  Loading products...
                </td>
              </tr>
            ) : filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-3 py-4 text-center text-sm text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => handleSelectItem(product.id)}
                    />
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-8 w-8 rounded-md object-cover mr-2"
                      />
                      <span className="text-sm font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                    {product.supplier}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {product.quantity} <span className="text-xs text-gray-500">{product.quantityUnit}</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {product.reorderLevel} <span className="text-xs text-gray-500">{product.reorderUnit}</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleUpdate(product.id)}
                        className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-1 text-red-600 hover:text-red-800 hover:bg-red-100 rounded"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Action bar for selected items */}
      {selectedItems.length > 0 && (
        <div className="flex items-center justify-between mt-4 p-2 bg-gray-50 rounded-md">
          <div className="text-sm text-gray-500">
            {selectedItems.length} item(s) selected
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm">
              Create requisition
            </button>
            <button 
              className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md text-sm"
              onClick={() => {
                if (window.confirm(`Are you sure you want to delete ${selectedItems.length} items?`)) {
                  setProducts(products.filter(product => !selectedItems.includes(product.id)));
                  setSelectedItems([]);
                }
              }}
            >
              Delete selected
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InventoryManagement;