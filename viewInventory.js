import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";
export default function Inventory() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/inventory");
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = records.filter(
    (record) =>
      record.id.toString().includes(searchTerm) ||
      record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colDef = [
    {
      accessor: "id",
      title: "ID",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "category",
      title: "Category",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "name",
      title: "Name",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "price",
      title: "Price",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "quantity",
      title: "Quantity",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "supplier",
      title: "Supplier",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
  ];

  return (
    <Box m="md">
      <div style={{ display: "flex", alignItems: "center" }}>

        <input
          type="text"
          placeholder="🔍ID or Name"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            height: "32px",
            fontSize: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom:"8px",
            paddingLeft: "8px",
            
          }}
        />
      </div>
      <DataTable
        height={500}
        withBorder
        shadow="md"
        highlightOnHover
        borderRadius="md"
        striped
        horizontalSpacing="xs"
        verticalSpacing="xs"
        fontSize="xs"
        verticalAlignment="top"
        columns={colDef}
        records={filteredRecords}
      />
    </Box>
  );
}
