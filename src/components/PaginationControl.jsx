import { Box, Pagination } from '@mui/material';

export default function PaginationControl({ totalPages, page, handleChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
}
