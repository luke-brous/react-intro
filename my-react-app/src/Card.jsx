// This is an example of a Card component in Reac


function Card() {
  return (
    <div className="border p-4 m-2 font-serif rounded-md shadow-lg text-center inline-block w-64">
      <img
        src="https://placehold.co/150"
        alt="Placeholder"
        className="max-w-[70%] h-auto mb-4 rounded-full mx-auto"
      />
      <h2 className="m-0 font-semibold">Card Title</h2>
      <p className="m-1 font-light">This is a description of the card.</p>
    </div>
  );
}

export default Card;
