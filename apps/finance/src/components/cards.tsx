export default function Cards({ title, value, icon }: any) {
  // const { title, value, icon } = props;
  return (
    <div className="flex items-center pl-5 pr-10 py-8 w-full bg-white rounded-lg">
      <div className="rounded-full bg-secondary p-2">{icon}</div>
      <div className="flex flex-col justify-between ml-4 w-full h-full">
        <div className="text-grey font-semibold text-sm">{title}</div>
        <div className="font-bold text-lg">{value}</div>
      </div>
    </div>
  );
}
