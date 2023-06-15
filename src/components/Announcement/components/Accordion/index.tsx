// ** React Imports
import React from "react";

// ** MUI Imports
import { Accordion } from "@mui/material";

// ** Custom Component Imports
import AccordionSummarized from "./Summary";
import AccordionDetailed from "./Detailed";

// ** Zustand Store Imports
import { useAnnouncementStore } from "@/zustand/announcement-store";

// =================================================================

const AnnouncementAccordion = () => {
  // ** Store **
  const { page, value, announcementStateData } = useAnnouncementStore();

  // ** Variables(For Pagination/Temporary) **
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const data = announcementStateData.slice(startIndex, endIndex);
  let data;
  if (value === "All") {
    data = announcementStateData.slice(startIndex, endIndex);
  } else if (value === "Read") {
    data = announcementStateData
      .filter((a) => a.isRead)
      .slice(startIndex, endIndex);
  }

  return (
    <>
      {data &&
        data.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummarized
              id={item.id}
              icon={item.icon}
              title={item.title}
              created_at={item.created_at}
              description={item.description}
            />
            <AccordionDetailed
              description={item.description}
              image={item.image}
            />
          </Accordion>
        ))}
    </>
  );
};

export default AnnouncementAccordion;
