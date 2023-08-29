import React from "react";
import StatusBadge from "./StatusBadge";
import { TableItem } from "../../types/TableTypes";

interface IProps {
  currentItems: TableItem[];
}

const Table = ({ currentItems }: IProps) => {
  return (
    <div className="relative mt-5 overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="border-b font-medium dark:border-neutral-500 table-fixed">
          <tr>
            <th
              scope="col"
              className="text-[var(--common-black-secondary)] py-4 lg:min-w-[600px] min-w-[140px]"
            >
              Title
            </th>
            <th
              scope="col"
              className="text-[var(--common-black-secondary)] px-5 py-4 min-w-[300px]"
            >
              Pages
            </th>
            <th
              scope="col"
              className="text-[var(--common-black-secondary)] px-5 py-4"
            >
              Last Modified
            </th>
            <th
              scope="col"
              className="text-[var(--common-black-secondary)] px-5 py-4"
            >
              Status
            </th>
            <th
              scope="col"
              className="text-[var(--common-black-secondary)] px-5py-4"
            >
              Ends
            </th>
            <th
              scope="col"
              className="text-[var(--common-black-secondary)] px-5 py-4"
            ></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border-b dark:border-neutral-500">
              <td className="py-4 font-medium text-[var(--common-black-secondary)]">
                <p className="text-[var(--charts-blue)]">{item.title}</p>
                <p className="text-[#A3A3A3] font-thin">
                  {item.publishDate || "(No publish date set)"}
                </p>
              </td>
              <td className="px-5 py-4 text-[var(--common-black-secondary)]">
                {item.pages.length <= 7 ? (
                  <div className="flex gap-1">
                    {item.pages.map((imgUrl) => (
                      <div key={imgUrl} className="max-w-[300px] flex-shrink-0">
                        <img
                          src={`./assets/images/table/${imgUrl}`}
                          alt=""
                          className="max-w-full max-h-[50px] object-cover"
                          width={28}
                          height={50}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="flex gap-1">
                      {item.pages.slice(0, 7).map((imgUrl) => (
                        <div
                          key={imgUrl}
                          className="max-w-[300px] flex-shrink-0"
                        >
                          <img
                            src={`./assets/images/table/${imgUrl}`}
                            alt=""
                            className="max-w-full max-h-[50px] object-cover"
                            width={28}
                            height={50}
                          />
                        </div>
                      ))}
                      <div className="text-gray-800 h-[50px] w-[28px] bg-gray-200 flex items-center justify-center rounded-sm">
                        +{item.pages.length - 7}
                      </div>
                    </div>
                  </>
                )}
              </td>
              <td className=" px-5 py-4 text-[var(--common-black-secondary)] block min-w-[160px]">
                {item.lastModified || "—"}
              </td>
              <td className="px-5 py-4 text-[var(--common-black-secondary)] text-center min-w-[110px]">
                <StatusBadge status={item.status} />
              </td>
              <td className=" px-5 py-4 text-[var(--common-black-secondary)] min-w-[150px]">
                {item.ends || "—"}
              </td>
              <td className="px-5 py-4 text-[var(--common-black-secondary)] min-w-[180px]">
                <div className="flex gap-5">
                  <button
                    aria-label="Delete"
                    className="border-[var(--error)] border rounded-sm px-4 py-2 flex justify-center items-center transition-colors duration-200 hover:bg-red-50"
                  >
                    <img
                      src="./assets/images/trash.svg"
                      alt=""
                      width={12}
                      height={12}
                    />
                  </button>
                  <button
                    aria-label="Edit"
                    className="bg-[#1DB56C] rounded-sm px-4 py-2 flex justify-center items-center gap-1 font-medium text-white transition-colors duration-200 hover:bg-green-700"
                  >
                    <img
                      src="./assets/images/edit.svg"
                      alt=""
                      width={12}
                      height={12}
                    />
                    <span>Edit</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
