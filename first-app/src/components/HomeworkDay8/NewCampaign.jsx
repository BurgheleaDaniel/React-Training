import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import TopBar from "./components/TopBar"
import LeftMenu from "./components/LeftMenu"
import { useForm } from "react-hook-form"
import { Button, Grid, Typography } from "@material-ui/core"
import { InputTextField } from "@webbeds/react/components/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: "100px",
  },
  form: {
    width: "100%",
  },
}))

export default function NewCampaign() {
  const classes = useStyles()
  const defaultValues = {}
  const validationSchema = yup.object().shape({
    campaignName: yup
      .string()
      .trim()
      .min(3, "Campaign Name must be at least 3 characters!")
      .required("Campaign Name is required!"),
  })
  const { errors, register, handleSubmit, control, watch } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <LeftMenu />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography variant="h4">New Campaign</Typography>
            </Grid>
            <form noValidate autoComplete="off" className={classes.form}>
              <Grid item xs={12}>
                <InputTextField
                  name="campaignName"
                  label="Campaign Name"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  name="campaignName"
                  label="Campaign Type"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  name="campaignDate"
                  label="Campaign date"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  name="campaignStatus"
                  label="Campaign status"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  name="campaignEndDate"
                  label="Campaign End Date"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  name="visitors"
                  label="Visitors"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  name="entrants"
                  label="Entrants"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <InputTextField
                  name="conversionRate"
                  label="Conversion Rate"
                  register={register}
                  errors={errors}
                  required
                />
              </Grid>

              <Button
                onClick={handleSubmit(onSubmit)}
                size="large"
                color="primary"
              >
                Save Campaign
              </Button>
            </form>
          </Grid>
        </div>
      </main>
    </div>
  )
}
