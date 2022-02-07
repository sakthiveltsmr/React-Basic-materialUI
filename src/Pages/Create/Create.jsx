import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Create() {
  return (
    <div>
      <h2>Create a Note</h2>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        align="center"
        gutterBottom
      >
        Create a Note
      </Typography>
      <Typography variant="button">Add Note</Typography>
    </div>
  );
}
