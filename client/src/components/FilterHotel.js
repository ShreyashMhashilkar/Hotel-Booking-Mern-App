import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
const FilterHotel = ({ boards, onBoardFilter, ratings, onRatingFilter, propertys, onPropertyFilter, rates, onRateFilter }) => {

  const [filters, setFilters] = useState({
    // name: "",
    rating: "",
    board: "",
    property: "",
    rate: ""
  });


  const handleInput = (field) => (event) => {
    const { value } = event.target;
    // console.log(event.target.value)
    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "rating":
        onRatingFilter(value);
        break;
      case "board":
        onBoardFilter(value);
        break;
      case "property":
        onPropertyFilter(value);
        break;
      case "rate":
        onRateFilter(value);
        break;
      default:
        break;
    }

  };


  return (
    <div className='transparent1'>

      <Box m={2}
        sx={{
          textAlign: 'center',


        }}
      >
        <Typography variant="h5" component="h5" color="darkblue">
          RATING
        </Typography>
        <FormControl sx={{ width: '100%' }} >
          <InputLabel id="demo-simple-select-helper-label" sx={{ color: "white" }} >Rating</InputLabel>
          <Select
            sx={{ color: "white" }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleInput("rating")}
            label="Rating"

          >
            {ratings.map((rating) => (
              <MenuItem value={rating} key={rating}>{rating}</MenuItem>
            ))}

          </Select>

        </FormControl>
      </Box>
      <Box m={2}
        sx={{
          // width: '100%',
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" component="h5" color="darkblue">
          BOARD BASIS
        </Typography>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-helper-label" sx={{ color: "white" }}>Board Basis</InputLabel>
          <Select
            sx={{ color: "yellow" }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleInput("board")}
            label="Board basis"

          >{boards.map((board) => (
            <MenuItem value={board} key={board}>{board}</MenuItem>
          ))}



          </Select>

        </FormControl>
      </Box>
      <Box m={2}
        sx={{
          // width: '100%',
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" component="h5" color="darkblue">
          Property Type
        </Typography>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-helper-label" sx={{ color: "white" }}>Property Type</InputLabel>
          <Select
            sx={{ color: "yellow" }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleInput("property")}
            label="Property Type"

          >
            {propertys.map((property) => (
              <MenuItem value={property} key={property}>{property}</MenuItem>
            ))}

          </Select>

        </FormControl>
      </Box>
      <Box m={2}
        sx={{
          // width: '100%',
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" component="h5" color="darkblue">
          RATE TYPE
        </Typography>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-helper-label" sx={{ color: "white" }}>Rate Type</InputLabel>
          <Select
            sx={{ color: "yellow" }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleInput("rate")}
            label="Rate Type"
          >
            {rates.map((rate) => (
              <MenuItem value={rate} key={rate}>{rate}</MenuItem>
            ))}


          </Select>

        </FormControl>
      </Box>
      <br />

    </div>
  )
}

export default FilterHotel