const theme = {
  colors: {
    brandColor1: `rgb(18, 184, 134)`,
    brandColor2: `rgb(46, 204, 113)`,
    brandColor3: `rgba(46, 204, 113, 0.8)`,
    brandColor4: `rgba(18, 184, 134, 0.8)`,
    darks: {
      1: `rgb(33, 37, 41)`,
      2: `rgb(52, 58, 64)`,
      3: `rgba(0, 0, 0, 0.043)`,
      4: `rgb(134, 142, 150)`,
      5: `rgb(73, 80, 87)`,
    },
    whites: {
      1: `rgb(241, 243, 245)`,
      2: `rgb(248, 249, 250)`,
      3: `rgb(233, 236, 239)`,
      4: `rgba(233, 236, 239, 0.8)`,
      5: `rgba(134, 142, 150, 0.8)`,
    },
    reds: {
      1: `#e74c3c`,
    },
  },
};

export const BrandColor1 = ({ theme }) => theme.colors.brandColor1;
export const BrandColor2 = ({ theme }) => theme.colors.brandColor2;
export const BrandColor3 = ({ theme }) => theme.colors.brandColor3;
export const BrandColor4 = ({ theme }) => theme.colors.brandColor4;
export const DarkColor1 = ({ theme }) => theme.colors.darks[1];
export const DarkColor2 = ({ theme }) => theme.colors.darks[2];
export const DarkColor3 = ({ theme }) => theme.colors.darks[3];
export const DarkColor4 = ({ theme }) => theme.colors.darks[4];
export const DarkColor5 = ({ theme }) => theme.colors.darks[5];
export const WhiteColor1 = ({ theme }) => theme.colors.whites[1];
export const WhiteColor2 = ({ theme }) => theme.colors.whites[2];
export const WhiteColor3 = ({ theme }) => theme.colors.whites[3];
export const WhiteColor4 = ({ theme }) => theme.colors.whites[4];
export const WhiteColor5 = ({ theme }) => theme.colors.whites[5];
export const RedColor1 = ({ theme }) => theme.colors.reds[1];

export default theme;
