import { PropTypes } from "prop-types";
import cartoon from "../Images/cartoon.png";

const Props = ({ name, bio, profession, children }) => {
  Props.defaultProps = {
    name: "Adelaja Mistura",
    bio: "Scratch here ▒▒▒▒▒▒▒▒▒▒ to unveil my secret bio.",
    profession: "FullStack Developer",
    children: <img style={{ width: 100 }} src={cartoon} />,
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
      {children}
    </div>
  );
};

Props.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Props;
