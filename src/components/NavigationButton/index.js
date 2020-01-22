import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const NavigationButton = ({ route, label }) => {
  const history = useHistory();
  const handleClick = () => history.push(route);

  return (
    <StyledButton variant="contained" color="secondary" onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

NavigationButton.propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavigationButton;
