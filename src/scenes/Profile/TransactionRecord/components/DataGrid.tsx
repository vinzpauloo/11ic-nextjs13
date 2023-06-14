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
import MockDepositData from "../../../../data/DepositData";
import MockWithdrawData from "../../../../data/WithdrawData";
import MockPromoData from "../../../../data/PromoData";

// ** Style Imports
import { CustomMUI } from "../../../../styles/CustomMUI";

// ** Zustand Store Imports
import { useTransactionRecordStore } from "@/zustand/transaction-record-store";

// =================================================================
const TransactionRecordDataGrid = () => {
  // ** Styles **
  const { StyledDataGrid } = CustomMUI();
  // ** Store **
  const { tabSelected, pageSize, depositPage, withdrawPage, promoPage } =
    useTransactionRecordStore();

  // ** Mock Data **
  const depositData = MockDepositData();
  const withdrawData = MockWithdrawData();
  const promoData = MockPromoData();

  // ** State **
  const [depositStateData] = useState(() => depositData);
  const [withdrawStateData] = useState(() => withdrawData);
  const [promoStateData] = useState(() => promoData);

  // Choose the appropriate data based on the selected tab
  let data;
  let page;
  switch (tabSelected) {
    case "deposit":
      data = depositStateData;
      page = depositPage;
      break;
    case "withdraw":
      data = withdrawStateData;
      page = withdrawPage;
      break;
    case "promo":
      data = promoStateData;
      page = promoPage;
      break;
    default:
      data = depositStateData;
      page = depositPage;
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

  const { handlePageChange } = useTransactionRecordStore((state) => ({
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

export default TransactionRecordDataGrid;
