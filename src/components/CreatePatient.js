import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

const defaultTheme = createTheme();

const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^(09|03|07|08|05)+([0-9]{8})$/;
  return phoneRegex.test(phone);
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const CreatePatientForm = () => {
  const [gender, setGender] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [primaryAddress, setPrimaryAddress] = useState('');
  const [secondaryAddress, setSecondaryAddress] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const [emails, setEmails] = useState(['']);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    axios.get('https://open.oapi.vn/location/provinces').then((response) => {
      setProvinces(response.data.data);
    });
  }, []);

  

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (index, event) => {
    const newPhones = [...phoneNumbers];
    newPhones[index] = event.target.value;
    setPhoneNumbers(newPhones);
  };

  const handleEmailChange = (index, event) => {
    const newEmails = [...emails];
    newEmails[index] = event.target.value;
    setEmails(newEmails);
  };

  const handlePrimaryAddressChange = (event) => {
    setPrimaryAddress(event.target.value);
  };

  const handleSecondaryAddressChange = (event) => {
    setSecondaryAddress(event.target.value);
  };

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setProvince(selectedProvince);
    setDistrict('');
    setWard('');
    axios.get(`https://open.oapi.vn/location/districts?provinceId=${selectedProvince}`).then((response) => {
      setDistricts(response.data.data);
      setWards([]);
    });
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);
    setWard('');
    axios.get(`https://open.oapi.vn/location/wards?&districtId=${selectedDistrict}`).then((response) => {
      setWards(response.data.data);
    });
  };

  const handleWardChange = (event) => {
    setWard(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const uniquePhones = new Set(phoneNumbers);
    const uniqueEmails = new Set(emails);

    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <FormContainer>
          <Typography component="h1" variant="h5">
            Tạo Mới Bệnh Nhân
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="firstName" label="Họ" name="firstName" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Tên" name="lastName" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="gender-label">Giới tính</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={gender}
                    label="Giới tính"
                    onChange={handleGenderChange}
                  >
                    <MenuItem value="male">Nam</MenuItem>
                    <MenuItem value="female">Nữ</MenuItem>
                    <MenuItem value="other">Khác</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Ngày sinh"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Thông tin liên lạc</Typography>
              </Grid>

              {phoneNumbers.map((phone, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <TextField
                    required
                    fullWidth
                    label="Số điện thoại"
                    value={phone}
                    onChange={(e) => handlePhoneChange(index, e)}
                  />
                </Grid>
              ))}

             

              {emails.map((email, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => handleEmailChange(index, e)}
                  />
                </Grid>
              ))}


              <Grid item xs={12}>
                <Typography variant="h6">Địa chỉ</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="province-label">Tỉnh/Thành phố</InputLabel>
                  <Select
                    labelId="province-label"
                    id="province"
                    value={province}
                    label="Tỉnh/Thành phố"
                    onChange={handleProvinceChange}
                  >
                    {provinces.map((prov) => (
                      <MenuItem key={prov.id} value={prov.id}>
                        {prov.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="district-label">Quận/Huyện</InputLabel>
                  <Select
                    labelId="district-label"
                    id="district"
                    value={district}
                    label="Quận/Huyện"
                    onChange={handleDistrictChange}
                    disabled={!province}
                  >
                    {districts.map((dist) => (
                      <MenuItem key={dist.id} value={dist.id}>
                        {dist.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="ward-label">Phường/Xã</InputLabel>
                  <Select
                    labelId="ward-label"
                    id="ward"
                    value={ward}
                    label="Phường/Xã"
                    onChange={handleWardChange}
                    disabled={!district}
                  >
                    {wards.map((w) => (
                      <MenuItem key={w.id} value={w.id}>
                        {w.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Địa chỉ chính"
                  value={primaryAddress}
                  onChange={handlePrimaryAddressChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Địa chỉ phụ"
                  value={secondaryAddress}
                  onChange={handleSecondaryAddressChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Tạo Mới
                </Button>
              </Grid>
            </Grid>
          </Box>
        </FormContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CreatePatientForm;
