'use client';

import PlusCircle from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import DeleteConfirmationModal from '../components/delete-confirmation-modal';

export default function ProjectsPage() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projectsData = [
    {
      name: 'Project 1',
      organization: 'Org 1',
      startDate: 'January 20, 2022',
      status: 'new',
    },
    {
      name: 'Project 2',
      organization: 'Org 1',
      startDate: 'January 20, 2023',
      status: 'completed',
    },
    {
      name: 'Project 3',
      organization: 'Org 1',
      startDate: 'March 20, 2024',
      status: 'ongoing',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'status-in-action';
      case 'completed':
        return 'status-completed';
      case 'ongoing':
        return 'status-retired';
      default:
        return 'status-in-action';
    }
  };

  const handleDelete = (project: any) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">Projects</h1>
        <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md flex items-center gap-2 text-sm">
          <PlusCircle />
          Add new Project
        </button>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Organization
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Start Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projectsData.map((project, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {project.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.organization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusClass(project.status)}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button className="btn-edit">Edit</button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(project)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && selectedProject && (
        <DeleteConfirmationModal
          type="project"
          name={selectedProject.name}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            // Handle delete logic here
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
