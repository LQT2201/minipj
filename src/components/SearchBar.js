import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';

const SimpleSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // Thời gian debounce là 500ms

    // Cleanup function: Hủy bỏ timeout nếu searchQuery thay đổi trước khi timeout hoàn tất
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      // Logic tìm kiếm khi debouncedQuery thay đổi, ví dụ gửi yêu cầu API
      console.log('Search for:', debouncedQuery);
    }
  }, [debouncedQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 2 }}>
      <TextField
        fullWidth
        label="Tìm kiếm..."
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SimpleSearchBar;
