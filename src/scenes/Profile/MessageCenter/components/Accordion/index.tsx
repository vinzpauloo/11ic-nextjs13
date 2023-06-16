// ** React Imports
import React from "react";

// ** MUI Imports
import { Accordion } from "@mui/material";

// ** Custom Component Imports
import MessageCenterAccordionSummarized from "./Summary";
import MessageCenterAccordionDetailed from "./Detailed";

// ** Zustand Store Imports
import {
  MessageCenterData,
  useMessageCenterStore,
} from "@/zustand/message-center-store";

// =================================================================
const MessageCenterAccordion = () => {
  // ** Store **
  const { page, value, announcementStateData } = useMessageCenterStore();

  // ** Variables(For Pagination/Temporary) **
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const data = announcementStateData.slice(startIndex, endIndex);

  let data: MessageCenterData[] = [];
  if (value === "All") {
    data = announcementStateData.slice(startIndex, endIndex);
  } else if (value === "Read") {
    data = announcementStateData
      .filter((a) => a.isRead)
      .slice(startIndex, endIndex);
  } else if (value === "Deleted") {
    // Don't show deleted announcements
    data = [];
  }

  return (
    <>
      {data &&
        data.map((item) => (
          <Accordion key={item.id}>
            <MessageCenterAccordionSummarized
              id={item.id}
              title={item.title}
              created_at={item.created_at}
              description={item.description}
            />
            <MessageCenterAccordionDetailed
              description={item.description}
              image={item.image}
            />
          </Accordion>
        ))}
    </>
  );
};

export default MessageCenterAccordion;
