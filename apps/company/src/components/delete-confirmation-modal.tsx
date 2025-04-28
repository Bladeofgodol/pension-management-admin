"use client"

interface DeleteConfirmationModalProps {
  type: string
  name: string
  onClose: () => void
  onConfirm: () => void
}

export default function DeleteConfirmationModal({ type, name, onClose, onConfirm }: DeleteConfirmationModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
        <p className="text-gray-600 mb-6">This will delete {name} entry from the system</p>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 bg-[#005470] text-white rounded-md hover:bg-[#004060] transition-colors"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}
