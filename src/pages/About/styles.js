import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// export default makeStyles((theme) => ({
//   root: {
//     flex: 1,
//     marginTop: 60,
//     [theme.breakpoints.down("sm")]: {
//       display: "none",
//     },
//   },

//   visionTxt: {
//     color: "#36476B",
//     fontSize: 28,
//     [theme.breakpoints.down("sm")]: {
//       fontSize: 14,
//     },
//   },
//   visionPrg: {
//     color: "#36476B",
//     fontSize: 18,
//     [theme.breakpoints.down("sm")]: {
//       fontSize: 10,
//     },
//   },
// }));

export const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: {
    lg: 16,
    md: 12,
    sm: 12,
    xs: 10,
  },
  padding: "10px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#FFFFF",
  backgroundColor: "#6D8CD0",
  borderColor: "#6D8CD0",
  borderRadius: 20,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#eeeee",
    borderColor: "#eeeee",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#eeeee",
    borderColor: "#eeeee",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.5rem rgba(0,123,255,.5)",
  },
});
