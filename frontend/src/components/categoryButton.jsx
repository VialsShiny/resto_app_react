export default function CategoryButton({ category, categorySelect, setCategorySelect }) {
  const selectClass = "bg-[#F54748] hover:bg-red-600 text-white";
  const notSelectClass = "bg-[#F5F5F5] hover:bg-[#F5F5F5]/30 text-black";

  return (
    <div
      className={`category-card w-full font-bold flex items-center gap-x-6 p-3 rounded-4xl shadow-md transition-all duration-500 ${categorySelect === category.id ? selectClass : notSelectClass
        }`}
      onClick={() => {
        if (window.location.pathname != '/menu') {
          setCategorySelect(category.id)
        } else {
          setCategorySelect(prev => prev === category.id ? 0 : category.id);
        }
      }}
    >
      <img
        src={`http://localhost:8000/storage/assets/category/${category.name
          .toLowerCase()
          .replace(/ /g, "_")}.svg`}
        className="h-12 w-12"
        alt={category.name}
      />
      <h3>{category.name}</h3>
    </div>
  );
}