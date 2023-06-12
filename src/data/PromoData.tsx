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
export default function MockPromoData() {
  const columns: any = [
    {
      flex: 0.02,
      minWidth: 120,
      sortable: false,
      field: "type",
      headerName: "Type",
      headerAlign: "center",
      align: "center",
    },
    {
      flex: 0.02,
      minWidth: 150,
      sortable: false,
      field: "order_number",
      headerName: "Order Number",
      headerAlign: "center",
      align: "center",
    },
    {
      flex: 0.02,
      minWidth: 170,
      sortable: false,
      field: "time",
      headerName: "Time",
      headerAlign: "center",
      align: "center",
      valueFormatter: (params: any) => {
        return formatDate(params?.value);
      },
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
      type: "Promo Obtained",
      order_number: "012103222004AA01",
      time: "2021-10-22 20:04:22",
      amount: 5201314,
      status: "Success",
    };

    const type = [
      "50% Promo Obtained",
      "75% Promo Obtained",
      "Bonus Promo Obtained",
      "Specialty Promo Obtained",
    ];
    const statuses = ["Success", "Pending", "Failed"];

    return Array.from({ length: numRows }, (_, i) => {
      const randomType = type[Math.floor(Math.random() * type.length)];
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      return {
        id: (i + 1).toString(),
        ...baseRow,
        type: randomType,
        status: randomStatus,
      };
    });
  };

  const rows = createRows(50);

  return { columns, rows };
}
