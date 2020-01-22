import React from "react";
import { Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";

const ValueLabel = ({ children, open, value }) => (
  <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
    {children}
  </Tooltip>
);

ValueLabel.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default ValueLabel;
