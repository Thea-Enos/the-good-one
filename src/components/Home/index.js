import React from "react";
import Location from "../Location";
import NavigationButton from "../NavigationButton";
import TimeSlider from "../TimeSlider";
import Forecast from "../Forecast";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import moment from "moment-timezone";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Title = styled.h1`
  color: palevioletred;
`;

const startOfTwoHoursFromNowMoment = moment()
  .add(2, "hour")
  .startOf("hour");
const startOfTwoHoursFromNowMs = startOfTwoHoursFromNowMoment.valueOf();

const startOfTwelveHoursFromNowMoment = moment()
  .add(12, "hours")
  .startOf("hour");
const startOfTwelveHoursFromNowMs = startOfTwelveHoursFromNowMoment.valueOf();

const initialFormState = {
  zipCode: "11209",
  startTimeView: startOfTwoHoursFromNowMs,
  stopTimeView: startOfTwelveHoursFromNowMs,
  startTimeCommitted: startOfTwoHoursFromNowMs,
  stopTimeCommitted: startOfTwelveHoursFromNowMs,
  coatMax: 35,
  jacketMax: 60
};

const formReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "updateZip":
      const { newZip } = payload;
      return { ...prevState, zipCode: newZip };
    case "updateViewTimes":
      const { newViewTimeVals } = payload;
      const startTimeView = newViewTimeVals[0];
      const stopTimeView = newViewTimeVals[1];
      return {
        ...prevState,
        startTimeView,
        stopTimeView
      };
    case "updateCommittedTimes":
      const { newCommittedTimeVals } = payload;
      const startTimeCommitted = newCommittedTimeVals[0];
      const stopTimeCommitted = newCommittedTimeVals[1];
      return {
        ...prevState,
        startTimeCommitted,
        stopTimeCommitted
      };
    default:
      return prevState;
  }
};

const Home = () => {
  const classes = useStyles();
  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    initialFormState
  );

  const handleZipChange = e => {
    const newZip = _.get(e, "target.value", initialFormState.zipCode);
    dispatchFormState({
      type: "updateZip",
      payload: {
        newZip
      }
    });
  };

  const handleTimeChange = (e, newViewTimeVals) => {
    dispatchFormState({
      type: "updateViewTimes",
      payload: {
        newViewTimeVals
      }
    });
  };

  const handleTimeChangeCommitted = (e, newCommittedTimeVals) => {
    dispatchFormState({
      type: "updateCommittedTimes",
      payload: {
        newCommittedTimeVals
      }
    });
  };

  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Weather or Not</Title>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Location
                zipCode={formState.zipCode}
                handleZipChange={handleZipChange}
              />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TimeSlider
                  handleTimeChange={handleTimeChange}
                  handleTimeChangeCommitted={handleTimeChangeCommitted}
                  startTimeView={formState.startTimeView}
                  stopTimeView={formState.stopTimeView}
                  startTimeCommitted={formState.startTimeCommitted}
                  stopTimeCommitted={formState.stopTimeCommitted}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Forecast
                zipCode={formState.zipCode}
                startTime={formState.startTimeCommitted}
                stopTime={formState.stopTimeCommitted}
                coatMax={formState.coatMax}
                jacketMax={formState.jacketMax}
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <NavigationButton route="/about" label="about" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
