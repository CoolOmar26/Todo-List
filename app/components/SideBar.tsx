import SideBarTopButtons from './SideBarTopButtons';

type checkFilterProps = {
  checkFilter: (selected: FilterProps) => void;
  selected: string;
};
type FilterProps = 'all' | 'Today' | 'active' | 'completed';

function SideBar({ checkFilter, selected }: checkFilterProps) {
  return (
    <div className="SideBar">
      <div className="SideBarTittle">
        <div className="SideBarTittleImgDiv">
          <img src="/check.svg" alt="" />
        </div>
        <p>Todo List</p>
      </div>
      <SideBarTopButtons checkFilter={checkFilter} selected={selected} />
    </div>
  );
}
export default SideBar;
