import SideBarTopButtons from './SideBarTopButtons';
import CategoryFilter from './CategoryFilter';
type checkFilterProps = {
  checkFilter: (selected: FilterProps) => void;
  selected: string;
  categoryFilter: string;
  setCategoryFilter: (categoryFilter: CategoryProps) => void;
  tasks: {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
    priority: string;
    category: string;
  }[];
};
type FilterProps = '' | 'Today' | 'active' | 'completed';
type CategoryProps = 'Work' | 'Study' | 'Personal' | 'Shopping' | 'Health' | '';

function SideBar({
  checkFilter,
  selected,
  categoryFilter,
  setCategoryFilter,
  tasks,
}: checkFilterProps) {
  return (
    <div className="SideBar">
      <div className="SideBarTittle">
        <div className="SideBarTittleImgDiv">
          <img src="/check.svg" alt="" />
        </div>
        <p>Todo List</p>
      </div>
      <SideBarTopButtons
        checkFilter={checkFilter}
        selected={selected}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <hr className="SideBarHr" />
      <p className="categoriesTitle">Categories</p>
      <CategoryFilter
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        tasks={tasks}
      />
    </div>
  );
}
export default SideBar;
