const lightTheme = {
  palette: {
    mode: 'light',
    ...{
      primary: {
        main: '#714e39'
      },
      secondary: {
        main: '#96705e'
      },
      background: {
        default: '#efebe9',
        paper: '#d7ccc8'
      },
      error: {
        main: '#c14941'
      },
      success: {
        main: '#4caf50'
      }
    }
  },
  ...{
    typography: {
      fontFamily: 'Poppins',
      fontWeightLight: 200,
      fontWeightMedium: 600,
      fontWeightBold: 800,
      fontSize: 16
    },
    shape: {
      borderRadius: 14
    }
  }
};

const darkTheme = {
  palette: {
    mode: 'dark',
    ...{
      primary: {
        main: '#ac8b80'
      },
      secondary: {
        main: '#987265'
      },
      background: {
        default: '#212121',
        paper: '#2b2b2b'
      }
    }
  },
  ...{
    overrides: {
      MuiAppBar: {
        colorInherit: {
          backgroundColor: '#303030',
          color: '#fff'
        }
      }
    },
    props: {
      MuiAppBar: {
        color: 'inherit'
      }
    },
    typography: {
      fontFamily: 'Poppins',
      fontWeightLight: 200,
      fontWeightMedium: 600,
      fontWeightBold: 800,
      fontSize: 16
    },
    shape: {
      borderRadius: 15
    }
  }
};

const getDesignTokens = (mode) => (mode === 'light' ? lightTheme : darkTheme);

export default getDesignTokens;
