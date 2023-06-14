// ** React Imports
import React, { useState } from "react";

// ** MUI Imports
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

// ** Data Imports
import MockLiveCasinoData from "@/data/LiveCasinoData";

// ** Style Imports
import { CustomMUI } from "../../../../styles/CustomMUI";

// ** Zustand Store Imports
import { useBettingRecordStore } from "@/zustand/betting-record-store";

// =================================================================
const BettingRecordDataGrid = () => {
  // ** Styles **
  const { StyledDataGrid } = CustomMUI();
  // ** Store **
  const {
    tabSelected,
    pageSize,
    casinoPage,
    sportsPage,
    lotteryPage,
    cardsPage,
    vegasPage,
    allPage,
  } = useBettingRecordStore();

  // ** Mock Data **
  const liveCasinoData = MockLiveCasinoData();

  // ** State **
  const [liveStateCasinoData] = useState(() => liveCasinoData);
  const [sportsStateData] = useState(() => liveCasinoData);
  const [lotteryStateData] = useState(() => liveCasinoData);
  const [cardsStateData] = useState(() => liveCasinoData);
  const [vegasStateData] = useState(() => liveCasinoData);
  const [allStateData] = useState(() => liveCasinoData);

  // Choose the appropriate data based on the selected tab
  let data;
  let page;
  switch (tabSelected) {
    case "casino":
      data = liveStateCasinoData;
      page = casinoPage;
      break;
    case "sports":
      data = sportsStateData;
      page = sportsPage;
      break;
    case "lottery":
      data = lotteryStateData;
      page = lotteryPage;
      break;
    case "cards":
      data = cardsStateData;
      page = cardsPage;
      break;
    case "vegas":
      data = vegasStateData;
      page = vegasPage;
      break;
    case "all":
      data = allStateData;
      page = allPage;
      break;
    default:
      data = allStateData;
      page = allPage;
      break;
  }

  return (
    <>
      <StyledDataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableVirtualization
        disableColumnMenu
        disableRowSelectionOnClick
        autoHeight
        checkboxSelection={false}
        columns={data.columns ?? []}
        rows={data.rows ?? []}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
              page: page,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{
          footer: CustomFooter,
        }}
      />
    </>
  );
};

// Custom Pagination for DataGrid =================================================
function CustomPagination() {
  // ** Styles **
  const { CustomPaginationStyle } = CustomMUI();
  // ** Store **
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const { handlePageChange } = useBettingRecordStore((state) => ({
    handlePageChange: state.handlePageChange,
  }));

  return (
    <CustomPaginationStyle
      count={5}
      page={page + 1}
      onChange={(event, value) => handlePageChange(event, value - 1)}
      //   onChange={(event, value) => apiRef.current.setPage(value - 1)}
      //   siblingCount={0} // number of siblings on each side of the current page
      //   boundaryCount={2} // number of boundary pages to show on each side
    />
  );
}

function CustomFooter() {
  const { StyledGridFooterContainer } = CustomMUI();

  return (
    <StyledGridFooterContainer>
      <CustomPagination />
    </StyledGridFooterContainer>
  );
}

export default BettingRecordDataGrid;
