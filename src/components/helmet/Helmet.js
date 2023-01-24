const Helmet = (props) => {
  document.title = `Mega store - ${props.title}`;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
