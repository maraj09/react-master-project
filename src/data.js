import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import BorderColorIcon from "@mui/icons-material/BorderColor";
const navLinks = [
  {
    id: 1,
    name: `Store`,
    link: `/`,
    icon: <LocalGroceryStoreIcon color="warning" />,
  },
  {
    id: 2,
    name: `Items`,
    link: `/items`,
    icon: <BurstModeIcon color="warning" />,
  },
  {
    id: 3,
    name: `MarkDown`,
    link: `/markdown`,
    icon: <BorderColorIcon color="warning" />,
  },
];

export { navLinks };
