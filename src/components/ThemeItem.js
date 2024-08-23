const ThemeItem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt="theme"
      className="theme__img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};
export default ThemeItem;
