type categoryProps = {
  category: string;
};
function CategoryDisplay({ category }: categoryProps) {
  return (
    <div className={`priorityDisplay ${category}`}>
      <img src={`/${category}.svg`} alt="" />
      {category}
    </div>
  );
}

export default CategoryDisplay;
