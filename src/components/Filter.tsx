import React, { useState } from 'react';
    import { ChevronDown, ChevronRight } from 'lucide-react';

interface FilterProps {
  categoryData: Record<string, string[]>;
  onFilter: (subcategories: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ categoryData, onFilter }) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [selectedSubcategories, setSelectedSubcategories] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleSubcategory = (subcategory: string) => {
    const newSelected = new Set(selectedSubcategories);
    if (newSelected.has(subcategory)) {
      newSelected.delete(subcategory);
    } else {
      newSelected.add(subcategory);
    }
    setSelectedSubcategories(newSelected);
    onFilter(Array.from(newSelected));
  };

  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 rounded-md p-4">
      <h3 className="font-semibold text-black mb-4">Фильтры</h3>
      {Object.entries(categoryData).map(([category, subcategories]) => (
        <div key={category} className="mb-2">
          <button
            onClick={() => toggleCategory(category)}
            className="flex items-center w-full text-left text-gray-700 hover:text-black transition-colors"
          >
            {expandedCategories.has(category) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span className="ml-2">{category}</span>
          </button>
          {expandedCategories.has(category) && (
            <div className="ml-6 mt-2 space-y-1">
              {subcategories.map(subcategory => (
                <label key={subcategory} className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={selectedSubcategories.has(subcategory)}
                    onChange={() => toggleSubcategory(subcategory)}
                    className="mr-2"
                  />
                  {subcategory}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;