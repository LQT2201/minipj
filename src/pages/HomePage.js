import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Link } from '@mui/material';

const pages = [
  {
    page: 'Trang chủ',
    href: '',
  },
  {
    page: "Dashboard",
    href: '/dashboard',
  }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#16a5b3',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ mr: 2 }} height='100%' width={80} component='img' src='logo.png' />

            <Box sx={{ flexGrow: 2 }} />

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link href={page.href} key={page.page} underline="none">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page.page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Link href="/signin" underline="none">
                <Button
                  sx={{
                    my: 2,
                    color: '#8DE3E0',
                    display: 'block',
                    border: "2px solid #8DE3E0",
                    borderRadius: 20,
                  }}
                >
                  Đăng nhập
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Grid container mt={8}>
          <Grid item md={5}>
            <Typography
              sx={{
                color: "#1e2266",
                fontSize: "60px",
                fontWeight: 750,
              }}
            >
              NHÂN VIÊN CHẤT LƯỢNG
            </Typography>
            <Typography
              sx={{
                color: "#02021a",
                fontSize: 16,
                fontWeight: 300,
              }}
            >
              Bệnh viện chúng tôi tự hào sở hữu đội ngũ nhân viên y tế chuyên nghiệp và tận tâm, được đào tạo bài bản từ các trường đại học y khoa hàng đầu. Mỗi thành viên trong đội ngũ của chúng tôi đều trải qua quá trình tuyển chọn gắt gao và các khóa huấn luyện chuyên sâu để đảm bảo mang lại dịch vụ y tế chất lượng cao nhất cho bệnh nhân. Nhân viên của chúng tôi không chỉ giỏi về mặt chuyên môn mà còn có tinh thần trách nhiệm cao, luôn sẵn sàng lắng nghe và thấu hiểu nhu cầu của bệnh nhân. Chúng tôi tin tưởng rằng, với đội ngũ nhân viên ưu tú và thái độ làm việc chuyên nghiệp, bệnh viện của chúng tôi sẽ là nơi bạn có thể tin tưởng gửi gắm sức khỏe của mình.
            </Typography>
            <Link href="signin">
            <Button
              sx={{
                my: 2,
                display: 'block',
                border: "2px solid",
                borderRadius: 20,
              }}
            >
              Hãy bắt đầu
            </Button>
            </Link>
          </Grid>
          <Grid item md={1} />
          <Grid item md={6}>
            <Box maxWidth="100%">
              <Box maxWidth="100%" component="img" src='./Pic 1.png' />
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={8} mb={8}>
          <Grid item md={5}>
            <Box maxWidth="100%">
              <Box maxWidth="100%" component="img" src='./Pic 2.jpg' />
            </Box>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={6}>
            <Typography
              sx={{
                color: "#1e2266",
                fontSize: "60px",
                fontWeight: 750,
              }}
            >
              CHĂM SÓC BỆNH NHÂN 24/7
            </Typography>
            <Typography
              sx={{
                color: "#02021a",
                fontSize: 16,
                fontWeight: 300,
              }}
            >
              Tại bệnh viện của chúng tôi, chúng tôi cung cấp dịch vụ chăm sóc sức khỏe 24/7, đảm bảo rằng mọi nhu cầu y tế của bạn đều được đáp ứng kịp thời, bất kể ngày đêm. Đội ngũ y bác sĩ và nhân viên y tế của chúng tôi luôn túc trực để phản ứng nhanh chóng với mọi tình huống khẩn cấp, cung cấp các biện pháp can thiệp sớm nhất có thể để đảm bảo an toàn cho bệnh nhân. Với trang thiết bị y tế hiện đại và quy trình vận hành chuyên nghiệp, chúng tôi cam kết mang lại dịch vụ y tế tốt nhất có thể. Sự an tâm của bạn là ưu tiên hàng đầu của chúng tôi, và chúng tôi luôn nỗ lực không ngừng để đạt được điều đó mỗi ngày.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
