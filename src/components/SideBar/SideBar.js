import React from "react";

import {
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export default function SideBar() {
  return (
    <div>
      <Drawer variant="permanent" className="">
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <IconButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
