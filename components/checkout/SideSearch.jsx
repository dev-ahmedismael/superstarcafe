import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SideSearch = () => {
  return (
    <Box id="side_search">
      <TextField
        fullWidth
        focused
        placeholder="Search..."
        sx={{ color: "red" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#c49b63" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SideSearch;
