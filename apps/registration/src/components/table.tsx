// components/Table.tsx
import { ReactNode } from "react";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto rounded-lg py-10 px-5 shadow-md">
      <table className="min-w-full divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : (row[column.key] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
