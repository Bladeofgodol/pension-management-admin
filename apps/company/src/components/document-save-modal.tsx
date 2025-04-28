"use client"

import type React from "react"

import { useState } from "react"
import { Search, ChevronDown, FolderClosed, File } from "lucide-react"

interface DocumentSaveModalProps {
  onClose: () => void
  onSave: (filename: string, fileType: string) => void
}

export default function DocumentSaveModal({ onClose, onSave }: DocumentSaveModalProps) {
  const [filename, setFilename] = useState("report.pdf")
  const [fileType, setFileType] = useState("pdf")

  const folders = [
    { id: 1, name: "Home", icon: <FolderClosed className="w-5 h-5 text-yellow-500" /> },
    { id: 2, name: "Documents", icon: <FolderClosed className="w-5 h-5 text-yellow-500" />, active: true },
    { id: 3, name: "Items Backups", icon: <FolderClosed className="w-5 h-5 text-blue-500" /> },
    { id: 4, name: "Personal projects", icon: <FolderClosed className="w-5 h-5 text-yellow-500" /> },
  ]

  const files = [
    { id: 1, name: "My car stuff", type: "folder", date: "19/11/1997", modified: "19/11/1997" },
    { id: 2, name: "Items Backups", type: "folder", date: "19/11/1997", modified: "19/11/1997" },
    { id: 3, name: "Personal projects", type: "folder", date: "19/11/1997", modified: "19/11/1997" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(filename, fileType)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="bg-gray-700 p-1 rounded">
              <File className="w-5 h-5 text-gray-300" />
            </div>
            <h2 className="text-lg font-medium text-white">Documents</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="search"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
              placeholder="Search"
            />
          </div>

          <div className="flex mb-4">
            <div className="w-1/4 pr-4 border-r border-gray-700">
              <ul className="space-y-1">
                {folders.map((folder) => (
                  <li
                    key={folder.id}
                    className={`flex items-center gap-2 p-2 rounded ${folder.active ? "bg-gray-700" : "hover:bg-gray-700"}`}
                  >
                    {folder.icon}
                    <span className="text-sm text-gray-300">{folder.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-3/4 pl-4">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span>This PC</span>
                  <span>›</span>
                  <span>Documents</span>
                </div>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                  Create a new folder
                </button>

                <div className="flex items-center gap-4">
                  <button className="text-gray-300 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <line x1="3" x2="21" y1="9" y2="9"></line>
                      <line x1="9" x2="9" y1="21" y2="9"></line>
                    </svg>
                  </button>
                  <button className="text-gray-300 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                  </button>
                  <button className="text-gray-300 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="18" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                      <line x1="6" x2="6" y1="9" y2="21"></line>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-gray-700 rounded overflow-hidden mb-4">
                <table className="min-w-full divide-y divide-gray-600">
                  <thead className="bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Date Created
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Date Modified
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-600">
                    {files.map((file) => (
                      <tr key={file.id} className="hover:bg-gray-600">
                        <td className="px-4 py-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <FolderClosed className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="text-sm text-gray-300">{file.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{file.type}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{file.date}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{file.modified}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">File name:</label>
                  <input
                    type="text"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">Save as type:</label>
                  <div className="relative">
                    <select
                      value={fileType}
                      onChange={(e) => setFileType(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 appearance-none"
                    >
                      <option value="pdf">pdf</option>
                      <option value="docx">docx</option>
                      <option value="xlsx">xlsx</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button onClick={handleSubmit} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              Save
            </button>
            <button onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
