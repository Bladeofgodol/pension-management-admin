import ContribTable from '../components/contribTable';
export default function resolveContribution() {
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-2 py-10 text-4xl font-light">Employees</div>
      <div className="flex w-full">
        <ContribTable />
      </div>
    </div>
  );
}
