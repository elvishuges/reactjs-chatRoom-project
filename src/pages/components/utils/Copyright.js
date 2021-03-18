import React from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" "}
      {"Copyright © "}{" "}
      <Link
        color="inherit"
        target="_blank"
        href="https://www.linkedin.com/in/elvis-huges-41043897/"
      >
        {props.websiteTitle}{" "}
      </Link>{" "}
      {new Date().getFullYear()} {"."}{" "}
    </Typography>
  );
}
