import theme from './theme';
import palette from './palette';
import typography, { fonts } from './typography';

export default {
  palette,
  typography: {
    ...typography,
    fonts,
  },
  ...theme,
};
