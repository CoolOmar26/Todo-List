type SortProps = {
  category: string;
  setCategory: (sort: string) => void;
};

function CategorySelect({ category, setCategory }: SortProps) {
  return (
    <div className="SortDivCategory">
      <select
        name="Sort"
        id="Sort"
        className="SelectSortCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Personal"> Personal</option>
        <option value="Work"> Work</option>
        <option value="Study"> Study</option>
        <option value="Shopping"> Shopping</option>
        <option value="Health"> Health</option>
      </select>
      <div className="SortIconDivCategory">
        <i className="fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
}

export default CategorySelect;
