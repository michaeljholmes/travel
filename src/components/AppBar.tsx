import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const HideOnScroll = ({ children }: any) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const CustomAppBar = () => {
  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Travels
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
