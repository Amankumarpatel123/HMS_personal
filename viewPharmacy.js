import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";

export default function Pharmacy() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/pharmacy");
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
      record.medication_name.toLowerCase().includes(searchTerm.toLowerCase())
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
      accessor: "medication_name",
      title: "Medication Name",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "dosage",
      title: "Dosage",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "refill_date",
      title: "Refill Date",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "prescription_number",
      title: "Prescription Number",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "patient_id",
      title: "Patient ID",
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
          placeholder="🔍ID or Medication Name"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            height: "32px",
            fontSize: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "8px",
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
