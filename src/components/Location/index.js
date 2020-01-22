import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import "../../styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const LocationSection = ({ zipCode, handleZipChange }) => {
  const classes = useStyles();
  return (
    <section>
      <p>Where will you be today?</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="zip-input"
          label="Zip Code"
          variant="outlined"
          value={zipCode}
          onChange={handleZipChange}
          type="string"
          helperText="Please enter a valid US zip code"
          inputProps={{
            inputMode: "numeric",
            autoComplete: "postal-code",
            autoFocus: "{true}",
            required: "{true}"
          }}
        />
      </form>
    </section>
  );
};

LocationSection.propTypes = {
  zipCode: PropTypes.string.isRequired,
  handleZipChange: PropTypes.func.isRequired
};

export default LocationSection;
