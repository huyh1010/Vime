import React from "react";
import { Pagination } from "@mui/material";

function MoviePagination({ setPage, pageNumber }) {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <Pagination
      count={pageNumber}
      shape="rounded"
      variant="outlined"
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        "& .MuiPaginationItem-outlinedPrimary": { color: "white" },
      }}
      onChange={(e, page) => handleChange(page)}
    />
  );
}

export default MoviePagination;
