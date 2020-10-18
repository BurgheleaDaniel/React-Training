import React from "react";
import DropDown from "./DropDown";
import { Grid } from "@material-ui/core";

const DropDownManager = () => {
  const handleClearClick = (setSelected) => setSelected([]);

  const handleSingleDelete = (key, selected, setSelected) => {
    const draft = [...selected];
    var index = draft.indexOf(key);
    draft.splice(index, 1);
    setSelected(draft);
  };

  const handleSelectClick = (key, selected, setSelected) => {
    if (selected.indexOf(key) === -1) {
      setSelected([...selected, key]);
    }
  };

  const handleSetIsOpen = (setIsOpen) => {
    setIsOpen(true);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DropDown
            name="cars"
            options={["BMW", "Dacia", "Seat"]}
            handleClearClick={handleClearClick}
            handleSingleDelete={handleSingleDelete}
            handleSelectClick={handleSelectClick}
            handleSetIsOpen={handleSetIsOpen}
          />
        </Grid>
        <Grid item xs={6}>
          <DropDown
            name="countries"
            options={["Romania", "Spain", "UK"]}
            handleClearClick={handleClearClick}
            handleSingleDelete={handleSingleDelete}
            handleSelectClick={handleSelectClick}
            handleSetIsOpen={handleSetIsOpen}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DropDownManager;
