import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { styled } from "@material-ui/core/styles"
import { colors } from "../theme"

const StyledListItem = styled(ListItem)({
  backgroundColor: colors.blue,
  color: colors.white,
  padding: "20px 0",
  margin: "0 auto",
})

const StyledListItemIcon = styled(ListItemIcon)({
  color: colors.white,
})

export default function DashboardListItem({ icon, label }) {
  return (
    <StyledListItem button>
      <StyledListItemIcon>{icon}</StyledListItemIcon>
      <ListItemText primary={label} />
    </StyledListItem>
  )
}
