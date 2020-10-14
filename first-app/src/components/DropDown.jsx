import React, { useState } from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const DropDown = (props) => {
  const { options } = props;
  const [selected, setSelected] = useState([]);

  const handleClearClick = () => setSelected([]);
  const handleSingleDelete = (key) => {
    const draft = [...selected];
    var index = draft.indexOf(key);
    draft.splice(index, 1);
    setSelected(draft);
  };

  const handleSelectClick = (key) => {
    if (selected.indexOf(key) === -1) {
      const draft = [...selected];
      draft.push(key);
      setSelected(draft);
    }
  };

  return (
    <>
      {selected.map((key) => (
        <Chip
          key={`selected_${key}`}
          label={options[key]}
          onDelete={() => handleSingleDelete(key)}
          color="primary"
        />
      ))}
      <List>
        <ListItem button onClick={handleClearClick}>
          <ListItemText primary="Clear" />
        </ListItem>

        {options.map((item, key) => {
          return (
            <ListItem
              button
              key={`options_${key}`}
              onClick={() => handleSelectClick(key)}
            >
              <ListItemText primary={item} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
};

DropDown.defaultProps = {
  options: [],
};

export default DropDown;
