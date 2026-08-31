type checkCategoryProps = {
  categoryFilter: string;
  setCategoryFilter: (categoryFilter: Categories) => void;
  tasks: {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
    priority: string;
    category: string;
  }[];
};
type Categories = 'Work' | 'Study' | 'Personal' | 'Shopping' | 'Health' | '';
function CategoryFilter({
  categoryFilter,
  setCategoryFilter,
  tasks,
}: checkCategoryProps) {
  const categoryCount = (category: string) => {
    return tasks.filter((task) => task.category === category).length;
  };
  return (
    <div className="categoriesFilterDiv">
      <button
        type="button"
        className={`CategoryFilterButton Personal ${categoryFilter == 'Personal' ? 'active' : ''}`}
        onClick={() => setCategoryFilter('Personal')}
      >
        <span className="dot Personal"></span>
        Personal
        <span className="categoryCount">{categoryCount('Personal')}</span>
      </button>
      <button
        type="button"
        className={`CategoryFilterButton Work ${categoryFilter == 'Work' ? 'active' : ''}`}
        onClick={() => setCategoryFilter('Work')}
      >
        <span className="dot Work"></span>
        Work
        <span className="categoryCount">{categoryCount('Work')}</span>
      </button>

      <button
        type="button"
        className={`CategoryFilterButton Study ${categoryFilter == 'Study' ? 'active' : ''}`}
        onClick={() => setCategoryFilter('Study')}
      >
        <span className="dot Study"></span>
        Study
        <span className="categoryCount">{categoryCount('Study')}</span>
      </button>
      <button
        type="button"
        className={`CategoryFilterButton Shopping ${categoryFilter == 'Shopping' ? 'active' : ''}`}
        onClick={() => setCategoryFilter('Shopping')}
      >
        <span className="dot Shopping"></span>
        Shopping
        <span className="categoryCount">{categoryCount('Shopping')}</span>
      </button>
      <button
        type="button"
        className={`CategoryFilterButton Health ${categoryFilter == 'Health' ? 'active' : ''}`}
        onClick={() => setCategoryFilter('Health')}
      >
        <span className="dot Health"></span>
        Health
        <span className="categoryCount">{categoryCount('Health')}</span>
      </button>
    </div>
  );
}

export default CategoryFilter;
