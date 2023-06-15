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
  const { page, announcementStateData } = useAnnouncementStore();

  // ** Variables(For Pagination/Temporary) **
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = announcementStateData.slice(startIndex, endIndex);

  return (
    <>
      {data.map((item) => (
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
