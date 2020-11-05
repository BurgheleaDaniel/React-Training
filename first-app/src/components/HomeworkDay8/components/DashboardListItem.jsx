import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { styled } from "@material-ui/core/styles"
import { colors } from "../theme"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const StyledListItem = styled(ListItem)({
  backgroundColor: colors.blue,
  color: colors.white,
  padding: "20px 0",
  margin: "0 auto",
})

const StyledListItemIcon = styled(ListItemIcon)({
  color: colors.white,
})

const DashboardListItem = ({ icon, label, link }) => {
  return (
    <StyledListItem button>
      <StyledListItemIcon>{icon}</StyledListItemIcon>
      <Link to={link}>
        <ListItemText primary={label} />
      </Link>
    </StyledListItem>
  )
}

DashboardListItem.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  link: PropTypes.string,
}

DashboardListItem.defaultProps = {
  link: "#",
}

export default DashboardListItem
