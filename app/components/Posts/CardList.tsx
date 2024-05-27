const CardList = ({ children }: any) => {
  return (
    <div className="bg-red-500 w-full p-4">
      <h1>User Card List</h1>
      {children}
    </div>
  );
};
export default CardList;
