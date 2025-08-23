// theme.ts
import { createTheme } from '@mui/material/styles';
import { feedbackCustomizations } from './customizations/feedbackCustomizations';

const theme = createTheme({
  components: {
    ...feedbackCustomizations,
  },
});

export default theme;
