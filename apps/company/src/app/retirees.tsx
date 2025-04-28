'use client';

export default function EligibleRetireesPage() {
  const retireesData = [
    {
      name: 'Abebe Yelma',
      organization: 'Org 1',
      eligibilityDate: 'January 20, 2025',
      status: 'in action',
    },
    {
      name: 'Abiy Assefa',
      organization: 'Org 1',
      eligibilityDate: 'January 20, 2025',
      status: 'in action',
    },
    {
      name: 'Abel Alem',
      organization: 'Org 1',
      eligibilityDate: 'January 20, 2022',
      status: 'retired',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in action':
        return 'status-in-action';
      case 'retired':
        return 'status-retired';
      default:
        return 'status-in-action';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-medium mb-6">Eligible Retirees</h1>

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
                Eligibility Date
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
            {retireesData.map((retiree, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {retiree.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {retiree.organization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {retiree.eligibilityDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusClass(retiree.status)}>
                    {retiree.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button className="btn-generate">Generate Report</button>
                  <button className="btn-edit">Apply for Retirement</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
