import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, History, QuestionMark } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PaletteIcon from "@mui/icons-material/Palette";
interface Props {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function DrawerMenu(props: Props) {
  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <Box
        minWidth={400}
        padding={2}
        bgcolor={"background.paper"}
        height={"100%"}
      >
        <h1>サイトメニュー</h1>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="about" onClick={props.onClose}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary="概要"
                secondary="Steamの概要について解説します"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="history"
              onClick={props.onClose}
            >
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText
                primary="歴史"
                secondary="Steamがどのような経歴を歩んできたのか"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="how-to-use"
              onClick={props.onClose}
            >
              <ListItemIcon>
                <QuestionMark />
              </ListItemIcon>
              <ListItemText
                primary="使い方"
                secondary="Steamでゲームを買う方法を解説"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="design"
              onClick={props.onClose}
            >
              <ListItemIcon>
                <PaletteIcon />
              </ListItemIcon>
              <ListItemText
                primary="デザイン"
                secondary="課題としての、このサイトのデザインについて"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
