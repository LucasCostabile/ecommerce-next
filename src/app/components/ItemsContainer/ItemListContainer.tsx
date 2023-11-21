
interface ItemListContainerProps {
  greeting: string;
}



const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <div className="text-center">
      <h2>{greeting}</h2>
    </div>
  );
};

export { ItemListContainer };

