// users click on Next
// the title, index and image are display

function NextButton({ title, artist, index, arrayLenght, img, alt, onClick }) {
  return (
    <>
      <button onClick={onClick}>Next</button>
      <h2>
        {title} by {artist}
      </h2>
      <h3>
        Display {index + 1} of {arrayLenght} artists
      </h3>
      <img scr={img} alt={alt} />
    </>
  );
}

export default NextButton;
