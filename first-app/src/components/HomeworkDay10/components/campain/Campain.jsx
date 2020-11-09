import React from "react"
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core"
import AcUnitIcon from "@material-ui/icons/AcUnit"
import { makeStyles } from "@material-ui/core/styles"
import { colors } from "../../theme"

const useStyles = makeStyles(() => ({
  rowWrapper: {
    display: "flex",
    width: "100%",
    margin: "15px 0",
    padding: "15px",
  },
  avatar: {
    height: "80px",
    width: "80px",
  },
  campainName: {
    fontWeight: 600,
    fontSize: 18,
  },
  campainType: {
    color: colors.blue,
    fontSize: 12,
  },
  greyText: {
    color: colors.lightgray,
  },
  roundBox: {
    border: `2px solid ${colors.lightgray}`,
    textAlign: "center",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  },
  campainCounter: {
    fontWeight: 600,
    fontSize: 18,
  },
  manageButton: {
    color: colors.white,
    backgroundColor: colors.blue,
    padding: "10px",
    borderRadius: "20px",
  },
  actionIconsWrappwer: {
    color: colors.lightgray,
  },
  actionIcon: {
    margin: "5px",
  },
}))

export default function Campain({
  avatar,
  name,
  type,
  status,
  startDate,
  endDate,
  visitorsNo,
  entrantsNo,
  conversionRate,
}) {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Paper className={classes.rowWrapper} elevation={3}>
        <Grid item xs={1}>
          <Avatar className={classes.avatar}>{avatar}</Avatar>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.campainName}>{name}</Box>
          <Box className={classes.campainType}>{type}</Box>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={classes.greyText}
          >
            {startDate}
          </Typography>
          <Divider />
          <Typography variant="caption" display="block" gutterBottom>
            <span>{status} </span>
            <span className={classes.greyText}>End date {endDate}</span>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.roundBox}>
            <p>Visitors</p>
            <span className={classes.campainCounter}>{visitorsNo}</span>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={classes.roundBox}>
            <p>Entrants</p>
            <span className={classes.campainCounter}>{entrantsNo}</span>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={classes.roundBox}>
            <p>Conv. Rate</p>
            <span className={classes.campainCounter}>{conversionRate}%</span>
          </div>
        </Grid>

        <Grid item xs={2}>
          <Button className={classes.manageButton}>Manage Winners</Button>
          <Box className={classes.actionIconsWrappwer}>
            <AcUnitIcon className={classes.actionIcon} />
            <AcUnitIcon className={classes.actionIcon} />
            <AcUnitIcon className={classes.actionIcon} />
            <AcUnitIcon className={classes.actionIcon} />
          </Box>
        </Grid>
      </Paper>
    </Grid>
  )
}
