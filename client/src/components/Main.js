import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterHotel from './FilterHotel';
import nature from './../asset/nature.mp4'

import DisplayHotel from './DisplayHotel';
import { useState } from 'react';
import Pagination from './Pagination';
import { data } from '../hotelData';
const Main = () => {

  const [allData, setData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = allData.slice(firstPostIndex, lastPostIndex);


  // Filter for rating
  const ratingFilter = (rating) => {
    const filteredData = data.filter((item) => {

      if (item.rating === rating) {
        return item;
      }
    });
    console.log("datarating")
    console.log(filteredData)
    setData(filteredData);
  };

  // get rating value from json data to display in dropdown
  const ratingData = () => {
    return [...new Set(data.map((item) => item.rating))];
  };

  // Filter for board basis
  const boardBasisFilter = (board) => {
    const filteredData = data.filter((item) => {

      if (item.board === board) {
        return item;
      }
    });

    setData(filteredData);
  };

  // getting board basis value from json data to display in dropdown
  const boardBasisData = () => {
    return [...new Set(data.map((item) => item.board))];
  };

  // Filter for property type
  const propertyTypeFilter = (property) => {
    const filteredData = data.filter((item) => {

      if (item.property === property) {
        return item;
      }
    });

    setData(filteredData);
  };

  // getting property type value from json data to display in dropdown
  const propertyTypeData = () => {
    return [...new Set(data.map((item) => item.property))];
  };

  // Filter for rate type
  const rateTypeFilter = (rate) => {
    const filteredData = data.filter((item) => {

      if (item.rate_type === rate) {
        return item;
      }
    });

    setData(filteredData);
  };

  // getting rate type value from json data to display in dropdown

  const rateTypeData = () => {
    return [...new Set(data.map((item) => item.rate_type))];
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box container sx={{ flexGrow: 1, mx: 2 }}>
        <Grid container spacing={2} mt={2}>

          <Grid item xs={12} sm={6} lg={3} md={6} >
            {/* <Item> */}
            <FilterHotel
              //  onNameFilter={handleFilterName}
              boards={boardBasisData()}
              onBoardFilter={boardBasisFilter}
              ratings={ratingData()}
              onRatingFilter={ratingFilter}
              propertys={propertyTypeData()}
              onPropertyFilter={propertyTypeFilter}
              rates={rateTypeData()}
              onRateFilter={rateTypeFilter}
            />
            {/* </Item> */}
          </Grid>
          <Grid item xs={12} sm={6} lg={8} md={6} >
            {/* <Item> */}
            {currentPosts.map((item) => (
              <DisplayHotel item={item} key={item.id} />
            ))}
            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
      <br />
      <Pagination
        totalPosts={allData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  )
}

export default Main