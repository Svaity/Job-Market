import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import { Avatar, IconButton, CardMedia, CardHeader, CardContent, Typography, CardActions } from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';

import { Grid } from "@material-ui/core";

const CoffeCard = props => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  return (
    <Grid item xs={12} sm={6} md={4}>
    <Card>
<CardHeader
avatar={<Avatar src={company_logo} />}
action={
  <IconButton aria-label="settings">
    <ShareIcon />
  </IconButton>
}
title="Company"
subheader="Position"
/>
<CardContent>
<Typography variant="body" component="p">
  asdfasdfsdf
</Typography>
</CardContent>
<CardActions>
<Button size="small" variant="secondary">BUY NOW</Button>
</CardActions>
</Card>
</Grid>

  );
};

export default CoffeCard;