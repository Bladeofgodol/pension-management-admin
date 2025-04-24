import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '../components/table';

interface ProjectData {
  name: string;
  organization: string;
  startDate: string;
  endDate: string;
  status: string;
}

const ProjectsTable = () => {
  const projectsData: ProjectData[] = [
    {
      name: 'Project 1',
      organization: 'Org 1',
      startDate: 'January 20, 2022',
      endDate: 'N/A',
      status: 'Live',
    },
    {
      name: 'Project 2',
      organization: 'Org 2',
      startDate: 'January 20, 2022',
      endDate: 'January 20, 2022',
      status: 'Complete',
    },
    {
      name: 'Project 3',
      organization: 'Org 1',
      startDate: 'January 20, 2022',
      endDate: 'January 20, 2022',
      status: 'Canceled',
    },
  ];

  const columns: any = [
    { key: 'name', header: 'Name' },
    { key: 'organization', header: 'Organization' },
    { key: 'startDate', header: 'Start Date' },
    { key: 'endDate', header: 'End Date' },

    {
      key: 'status',
      header: 'Status',
      render: (value: string) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === 'Live'
              ? 'bg-blue-100 text-blue-800'
              : value === 'Complete'
              ? 'bg-green-100 text-green-800'
              : 'bg-orange-100 text-orange-800'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'actions',
      render: () => (
        <div className="space-x-5 ">
          <Button
            sx={{
              color: 'white',
              backgroundColor: '#034B64',
              borderRadius: '7px',
              fontWeight: '550',
              fontSize: 11,
            }}
          >
            Edit
          </Button>
          <Button
            sx={{
              color: 'white',
              backgroundColor: 'red',
              borderRadius: '7px',
              fontWeight: '550',
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
    <div className="p-6 ">
      <div className="w-full flex justify-end">
        <Link to="/registration/form?field=project">
          <Button
            sx={{
              backgroundColor: '#DFF0FF',
              color: 'black',
              padding: '5px 15px',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Add new project
          </Button>
        </Link>
      </div>

      <h1 className="text-xl font-bold mb-4">Projects</h1>
      <Table data={projectsData} columns={columns} />
    </div>
  );
};

export default ProjectsTable;
