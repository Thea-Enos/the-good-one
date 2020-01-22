import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";
import moment from "moment-timezone";
import ValueLabel from "../ValueLabel";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const formatter = {
  short: "LT",
  long: " h:mm A, MMM D"
};

const oneHour = 1000 * 60 * 60;
const getReadableTime = (timeInMs, useShortFormat) => {
  const formatMode = useShortFormat ? formatter.short : formatter.long;
  return moment(timeInMs).format(formatMode);
};

const startOfCurrentHourMoment = moment().startOf("hour");
const startOfCurrentHourMs = startOfCurrentHourMoment.valueOf();

const startOfHourOneDayFromNowMoment = moment()
  .add(1, "day")
  .startOf("hour");
const startOfHourOneDayFromNowMs = startOfHourOneDayFromNowMoment.valueOf();

const formatValueLabel = val => {
  return getReadableTime(val, true);
};

const CustomizedSlider = withStyles({
  root: {
    height: 8,
    marginTop: 40,
    marginBottom: 20
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -6,
    marginLeft: -9,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const TimeSlider = ({
  handleTimeChange,
  handleTimeChangeCommitted,
  startTimeView,
  stopTimeView
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>When will you be out?</p>
      <CustomizedSlider
        value={[startTimeView, stopTimeView]}
        onChange={handleTimeChange}
        onChangeCommitted={handleTimeChangeCommitted}
        step={oneHour}
        valueLabelDisplay="on"
        min={startOfCurrentHourMs}
        max={startOfHourOneDayFromNowMs}
        valueLabelFormat={formatValueLabel}
        ValueLabelComponent={ValueLabel}
      />
      <div>Leaving Home: {getReadableTime(startTimeView, false)}</div>
      <div>Returning: {getReadableTime(stopTimeView, false)}</div>
    </div>
  );
};

export default TimeSlider;
