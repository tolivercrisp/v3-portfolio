// react
import React from "react";
import { Link } from "react-router-dom";
// Material UI
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ContactForm() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Stack
        component="form"
        sx={{
          width: "30ch",
        }}
        spacing={4}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5">Contact me.</Typography>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Name"
          size="small"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Email"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Write your message here."
          multiline
          rows={8}
        />
        {/* doesn't actually submit anything */}
        <Button
          type="submit"
          fullWidth={true}
          variant="outlined"
          component={Link}
          to="/"
          sx={{
            textTransform: "none",
          }}
        >
          <SendIcon />
        </Button>
      </Stack>
    </Box>
  );
}
