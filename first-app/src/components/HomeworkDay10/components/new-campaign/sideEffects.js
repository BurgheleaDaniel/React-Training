import * as yup from "yup"

export const getValidationSchema = () => {
  return yup.object().shape({
    campaignName: yup.string().required("Campaign Name is required!"),
    campaignType: yup.string().required("Campaign Type is required!"),
    campaignDate: yup.string().required("Campaign Date is required!"),
    campaignStatus: yup.string().required("Campaign Status is required!"),
    campaignEndDate: yup.string().required("Campaign End Date is required!"),
    visitors: yup
      .number()
      .typeError("Must be a number")
      .required("Campaign visitors is required!"),
    entrants: yup
      .number()
      .typeError("Must be a number")
      .required("Campaign entrants is required!"),
    conversionRate: yup
      .number()
      .typeError("Must be a number")
      .required("Campaign Conversion Rate is required!"),
  })
}

export const saveCampaign = (dispatch, data) => {
  const avatar = Math.random().toString(36)[3] + Math.random().toString(36)[3]

  const payload = {
    avatar: avatar,
    name: data.campaignName,
    type: data.campaignType,
    status: data.campaignDate,
    startDate: data.campaignStatus,
    endDate: data.campaignEndDate,
    visitorsNo: data.visitors,
    entrantsNo: data.entrants,
    conversionRate: data.conversionRate,
  }

  dispatch({ type: "add", payload })
}
