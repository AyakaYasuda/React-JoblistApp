import { createTheme } from '@mui/material';

const primaryColor = 'hsl(180, 29%, 50%)';
const lightColor1 = 'hsl(180, 52%, 96%)';
const lightColor2 = 'hsl(180, 31%, 95%)';
const darkColor = 'hsl(180, 8%, 52%)';
const veryDarkColor = 'hsl(180, 14%, 20%)';

const theme = createTheme({
  components: {
    'MuiInputBase-input-MuiOutlinedInput-input': {
      styleOverrides: {
        root: {
          fontFamily: ['Spartan', 'sans-serif'],
          fontSize: '2rem',
        },
      },
    },
  },
});

export default theme;
