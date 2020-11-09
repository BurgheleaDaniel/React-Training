import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import TopBar from "../TopBar"
import LeftMenu from "../LeftMenu"
import { useForm } from "react-hook-form"
import { Button, Grid, Typography } from "@material-ui/core"
import { FormActions, InputTextField } from "@webbeds/react/components/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { getValidationSchema, saveCampaign } from "./sideEffects"
import { useHistory } from "react-router-dom"
import { useCampaignDispatch } from "../../context"

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    paddingTop: "100px",
  },
  form: {
    width: "100%",
  },
})

const NewCampaign = () => {
  const dispatch = useCampaignDispatch()
  const classes = useStyles()
  const history = useHistory()
  const defaultValues = {}
  const validationSchema = getValidationSchema()
  const { errors, register, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = data => {
    saveCampaign(dispatch, data)

    history.push("/HomeworkDay10")
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
                  name="campaignType"
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

              <FormActions>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  size="large"
                  color="primary"
                >
                  Save
                </Button>
              </FormActions>
            </form>
          </Grid>
        </div>
      </main>
    </div>
  )
}

export default NewCampaign
