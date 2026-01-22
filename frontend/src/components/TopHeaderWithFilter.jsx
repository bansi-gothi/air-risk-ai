import { Typography, Box, Autocomplete, TextField } from "@mui/material";

import { cities } from "../constants/cities";

const TopHeaderWithFilter = ({ selectedCity, setSelectedCity }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
        backgroundColor: "#09226C",
        px: 2,
        py: 1.5,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#FFFFFF",
          fontWeight: 700,
          flexGrow: 1,
          minWidth: 200,
        }}
      >
        Air Risk AI Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: { xs: 1, sm: 0 },
        }}
      >
        <Typography sx={{ color: "#FFFFFF", fontWeight: 500 }}>
          Filter by City:
        </Typography>

        <Autocomplete
          sx={{
            width: 250,
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#ffffff",
              borderRadius: 1,
            },
          }}
          options={cities}
          value={selectedCity}
          getOptionLabel={(option) => option.city}
          onChange={(event, newValue) => {
            setSelectedCity(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          isOptionEqualToValue={(option, value) => option.city === value.city}
        />
      </Box>
    </Box>
  );
};

export default TopHeaderWithFilter;
