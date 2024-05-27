"use client";

interface IViewUserButton {
  userId: number;

}

const ViewUserButton: React.FC<IViewUserButton> = ({ userId }) => {
  const handleClick = () => alert(`user id:${userId}`);
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      View User
    </button>
  );
};

export default ViewUserButton;
