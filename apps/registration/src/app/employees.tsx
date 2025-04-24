// pages/Employees.tsx
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface RegionData {
  name: string;
  organization: string;
  eligibilityDate: string;
  status: string;
}

const EmployeesTable = () => {
  const EmployeesData: RegionData[] = [
    {
      name: "Abebe Yelma",
      organization: "Org 1",
      eligibilityDate: "January 20, 2022",
      status: "In action",
    },
    {
      name: "Abiy Assefa",
      organization: "Org 2",
      eligibilityDate: "January 20, 2022",
      status: "In action",
    },
    {
      name: "Abel Alem",
      organization: "Org 1",
      eligibilityDate: "January 20, 2024",
      status: "Retiree",
    },
  ];

  const columns:any = [
    { key: "name", header: "Name" },
    { key: "organization", header: "Organization" },
    { key: "eligibilityDate", header: "Eligibility Date" },

    {
      key: "status",
      header: "Status",
      render: (value: any) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === "In action"
              ? "bg-blue-100 text-blue-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "status", // Reusing key for actions
      render: () => (
        <div className="space-x-5 ">
          <Button
            sx={{
              color: "white",
              backgroundColor: "#008000",
              borderRadius: "7px",
              fontWeight: "550",
              fontSize: 11,
            }}
          >
            Generate Report
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#034B64",
              borderRadius: "7px",
              fontWeight: "550",
              fontSize: 11,
            }}
          >
            Edit
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "red",
              borderRadius: "7px",
              fontWeight: "550",
              fontSize: 11,
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="w-full flex justify-end">
      <Link to="/registration/form?field=employee">
          <Button
            sx={{
              backgroundColor: "#DFF0FF",
              color: "black",
              padding: "5px 15px",
              fontWeight: "bold",
              borderRadius: 2,
            }}
          >
            Add new Employee
          </Button>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-4">Employees</h1>
      <Table data={EmployeesData} columns={columns} />
    </div>
  );
};

export default EmployeesTable;
