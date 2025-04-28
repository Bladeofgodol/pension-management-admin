export default function Cards({ title, value, icon, button = false }: any) {
  // const { title, value, icon } = props;
  return (
    <div className="flex items-center px-4 py-8 w-full bg-white rounded-lg">
      <div className="rounded-full bg-secondary p-2">{icon}</div>
      <div className="flex flex-col justify-between ml-4 w-full">
        <div className="text-grey font-semibold text-sm">{title}</div>
        <div className="font-bold text-lg">{value}</div>
      </div>
      <div className="w-full justify-center flex">{button}</div>
    </div>
  );
}
