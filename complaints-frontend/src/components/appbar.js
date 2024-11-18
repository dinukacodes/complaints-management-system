import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

// Styled component for the custom toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 128,
  },
}));

// Styled AppBar with a gradient background
const GradientAppBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.12)',
});

// IconButton styles with hover effect
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GradientAppBar position="static">
        <StyledToolbar>
          <StyledIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              alignSelf: 'flex-end',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              letterSpacing: 1.2,
              color: '#fff',
            }}
          >
            Complaints
          </Typography>
          <StyledIconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </StyledIconButton>
          <StyledIconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </StyledIconButton>
        </StyledToolbar>
      </GradientAppBar>
    </Box>
  );
}
