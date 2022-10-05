const NFT = ({ name, address, imageURL }) => {
  return (
    <div className="w-full rounded border-2 px-3 hover:bg-red-500 ease-linear transition-all cursor-pointer">
      <h1 className="text-2xl">{name}</h1>
      <p className="text-ellipsis truncate w-75">{address}</p>
      <img className="w-full h-96" src={imageURL} alt={name} />
    </div>
  );
};

export default NFT;
