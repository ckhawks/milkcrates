import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./IconButton.module.scss";

const IconButton = (props) => {
  return (
    <button className={`${classes.base} ${classes["bgcolor-" + props.color]}`}>
      <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
    </button>
  );
};

export default IconButton;
