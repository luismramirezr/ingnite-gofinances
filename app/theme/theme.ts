import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const theme = {
  defaultSpacer: 8,
  defaultRadius: 1,
  rfValue: (value: number): number => RFValue(value),
  rfPercentage: (value: number): number => RFPercentage(value),
  spacing: (...spacing: number[]): string =>
    spacing.map((n) => `${RFValue(theme.defaultSpacer * n)}px`).join(' '),
  radius: (...radius: number[]): string =>
    radius.map((r) => `${RFValue(theme.defaultRadius) * r}px`).join(' '),
};

export default theme;
