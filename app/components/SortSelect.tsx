type SortProps = {
  sort: string;
  setSort: (sort: string) => void;
};

function SortSelect({ sort, setSort }: SortProps) {
  return (
    <div className="SortDiv">
      <select
        name="Sort"
        id="Sort"
        className="SelectSort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="PriorityHigh"> Priority: High</option>
        <option value="PriorityLow"> Priority: Low</option>
        <option value="Newest"> Newest</option>
        <option value="Oldest"> Oldest</option>
      </select>
      <div className="SortIconDiv">
        <i className="fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
}

export default SortSelect;
