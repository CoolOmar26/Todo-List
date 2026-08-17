import { useState } from 'react';
import SortSelect from './SortSelect';

type checkFilterProps = {
  checkFilter: (selected: FilterProps) => void;
  selected: string;
  sort: string;
  setSort: (sort: string) => void;
};
type FilterProps = 'all' | 'Today' | 'active' | 'completed';
export default function FilterButtons({
  checkFilter,
  selected,
  sort,
  setSort,
}: checkFilterProps) {
  return (
    <div className="tabs">
      <button
        className={selected === 'all' ? 'tab active' : 'tab'}
        onClick={() => checkFilter('all')}
      >
        All
      </button>

      <button
        className={selected === 'active' ? 'tab active' : 'tab'}
        onClick={() => checkFilter('active')}
      >
        Active
      </button>

      <button
        className={selected === 'completed' ? 'tab active' : 'tab'}
        onClick={() => checkFilter('completed')}
      >
        Completed
      </button>
      <SortSelect sort={sort} setSort={setSort} />
    </div>
  );
}
