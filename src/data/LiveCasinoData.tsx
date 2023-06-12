// ** Util Imports
import formatDate from "@/utils/formatDate";

// ** MUI Imports
import { Typography } from "@mui/material";

// ** Types
interface StatusProp {
  [key: string]: {
    title: string;
    color: string;
  };
}

const statusObject: StatusProp = {
  Success: { title: "Success", color: "#4CAF50" },
  Pending: { title: "Pending", color: "#FFC107" },
  Failed: { title: "Failed", color: "#F44336" },
};

// =================================================================
export default function MockLiveCasinoData() {
  const columns: any = [
    {
      flex: 0.01,
      minWidth: 120,
      sortable: false,
      field: "type",
      headerName: "Type",
      headerAlign: "center",
      align: "center",
    },
    {
      flex: 0.02,
      minWidth: 100,
      sortable: false,
      field: "platform",
      headerName: "Platform",
      headerAlign: "center",
      align: "center",
    },
    {
      flex: 0.04,
      minWidth: 170,
      sortable: false,
      field: "betting_slip_number",
      headerName: "Betting Slip Number",
      headerAlign: "center",
      align: "center",
    },
    {
      flex: 0.02,
      minWidth: 100,
      sortable: false,
      field: "amount",
      headerName: "Amount",
      headerAlign: "center",
      align: "center",
      renderCell: (params: any) => {
        return <span style={{ color: "#F3B867" }}>{params?.value} INR</span>;
      },
    },
    {
      flex: 0.02,
      minWidth: 100,
      sortable: false,
      field: "dividend_amount",
      headerName: "Dividend Amount",
      headerAlign: "center",
      align: "center",
      renderCell: (params: any) => {
        return (
          <span
            style={{
              color: params?.value.startsWith("-") ? "#F44336" : "#4CAF50",
            }}
          >
            {params?.value} INR
          </span>
        );
      },
    },
    {
      flex: 0.01,
      minWidth: 90,
      sortable: false,
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      renderCell: (params: any) => {
        const status = statusObject[params?.value];

        return (
          <Typography color={status?.color} fontSize={12} fontFamily="Roboto">
            {status?.title}
          </Typography>
        );
      },
    },
  ];

  // Mock Data for Rows
  const createRows = (numRows: number) => {
    const baseRow = {
      type: "Sports",
      platform: "SBO",
      betting_slip_number: "84012103222004AA01",
      amount: 5201314,
      dividend_amount: "+5201314",
      status: "Success",
    };

    const types = ["Sports", "Lottery", "Vegas", "Cards"];
    const platforms = ["SBO", "Lottery", "The 7 Little Pigs", "BlackJack"];
    const dividendAmounts = ["-1231231", "+1231232", "", "-823161", "-1232312"];
    const statuses = ["Success", "Pending", "Failed"];

    return Array.from({ length: numRows }, (_, i) => {
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomPlatform =
        platforms[Math.floor(Math.random() * platforms.length)];
      const randomDividends =
        dividendAmounts[Math.floor(Math.random() * dividendAmounts.length)];
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      return {
        id: (i + 1).toString(),
        ...baseRow,
        type: randomType,
        platform: randomPlatform,
        dividend_amount: randomDividends,
        status: randomStatus,
      };
    });
  };

  const rows = createRows(50);

  return { columns, rows };
}
