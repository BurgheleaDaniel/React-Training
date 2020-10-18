import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useOutsideAlerter } from "./sideEffects";

const DropDown = (props) => {
  const {
    name,
    handleClearClick,
    handleSingleDelete,
    handleSelectClick,
    handleSetIsOpen,
    options,
  } = props;

  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, isOpen, setIsOpen);

  return (
    <div ref={wrapperRef}>
      {selected.map((key) => (
        <Chip
          key={`selected_${key}`}
          label={options[key]}
          onDelete={() => handleSingleDelete(key, selected, setSelected)}
          color="primary"
        />
      ))}

      {!isOpen && (
        <ListItem button onClick={() => handleSetIsOpen(setIsOpen)}>
          <ListItemText primary={name} />
        </ListItem>
      )}

      {isOpen && (
        <List>
          <ListItem button onClick={() => handleClearClick(setSelected)}>
            <ListItemText primary="Clear" />
          </ListItem>

          {options.map((item, key) => {
            return (
              <ListItem
                button
                key={`options_${key}`}
                onClick={() => handleSelectClick(key, selected, setSelected)}
              >
                <ListItemText primary={item} />
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  handleClearClick: PropTypes.func.isRequired,
  handleSingleDelete: PropTypes.func.isRequired,
  handleSelectClick: PropTypes.func.isRequired,
  handleSetIsOpen: PropTypes.func.isRequired,
  options: PropTypes.array,
};

DropDown.defaultProps = {
  options: [],
};

export default DropDown;
