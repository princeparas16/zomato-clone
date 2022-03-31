const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderRadius: "50%",
        padding: "4px",
        margin: "-10px 25px 0px 0px",
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
