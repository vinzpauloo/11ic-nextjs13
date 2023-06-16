// ** MUI Imports
import { Stack } from "@mui/material";

// ** Style Imports
import { CustomMUI } from "@/styles/CustomMUI";

// ** Zustand Imports
import { useMessageCenterStore } from "@/zustand/message-center-store";

// =================================================================
const MessageCenterPagination = () => {
  // ** Styles **
  const { CustomPaginationStyle } = CustomMUI();

  // ** Store **
  const { page, announcementStateData } = useMessageCenterStore();

  // ** Store Functions **
  const { handlePageChange } = useMessageCenterStore((state) => ({
    handlePageChange: state.handlePageChange,
  }));

  // ** Variables(For Pagination/Temporary) **
  const itemsPerPage = 10;
  const totalPages = Math.ceil(announcementStateData.length / itemsPerPage);

  return (
    <Stack alignItems="center">
      <CustomPaginationStyle
        count={totalPages}
        page={page}
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default MessageCenterPagination;
