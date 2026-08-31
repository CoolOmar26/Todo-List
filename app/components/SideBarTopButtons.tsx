import { Save } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';

type checkFilterProps = {
  checkFilter: (selected: FilterProps) => void;
  selected: string;
  categoryFilter: string;
  setCategoryFilter: (categoryFilter: CategoryProps) => void;
};
type FilterProps = '' | 'Today' | 'active' | 'completed';
type CategoryProps = 'Work' | 'Study' | 'Personal' | 'Shopping' | 'Health' | '';
function SideBarTopButtons({
  checkFilter,
  selected,
  categoryFilter,
  setCategoryFilter,
}: checkFilterProps) {
  return (
    <div className="SideBarButtonsTopDiv">
      <button
        className={`SideBarTopButton ${selected == '' && categoryFilter == '' ? 'active' : ''}`}
        onClick={() => {
          checkFilter('');
          setCategoryFilter('');
        }}
      >
        <Save size={22} />
        All Tasks
      </button>
      <button
        className={`SideBarTopButton ${selected == 'Today' ? 'active' : ''}`}
        onClick={() => checkFilter('Today')}
      >
        <Calendar size={22} />
        Today
      </button>
      <button
        className={`SideBarTopButton ${selected == 'active' ? 'active' : ''}`}
        onClick={() => checkFilter('active')}
      >
        <Clock size={22} />
        Active
      </button>
      <button
        className={`SideBarTopButton ${selected == 'completed' ? 'active' : ''}`}
        onClick={() => checkFilter('completed')}
      >
        <CircleCheckBig size={22} />
        Completed
      </button>
    </div>
  );
}

export default SideBarTopButtons;
