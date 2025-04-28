"use client"

import type React from "react"

import { useState } from "react"
import Plus from '@mui/icons-material/AddCircle';
import Calendar from '@mui/icons-material/CalendarMonth';
import ChevronDown from '@mui/icons-material/KeyboardArrowDown';
import X from '@mui/icons-material/X';

interface AddDependentModalProps {
  onClose: () => void
  onAdd: (dependent: any) => void
}

export default function AddDependentModal({ onClose, onAdd }: AddDependentModalProps) {
  const [formData, setFormData] = useState({
    paydaNo: "12345678",
    name: "",
    relationship: "Son",
    dob: "8 - March - 2025",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Add Dependent Form</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Payda No.</label>
            <input
              type="text"
              name="paydaNo"
              value={formData.paydaNo}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Relationship</label>
            <div className="relative">
              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="select-field pr-8"
              >
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Spouse">Spouse</option>
                <option value="Parent">Parent</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                <ChevronDown  className="text-gray-500" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">DOB</label>
            <div className="relative">
              <input type="text" name="dob" value={formData.dob} onChange={handleChange} className="input-field pr-8" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                <Calendar className="text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <button type="button" onClick={onClose} className="btn-secondary">
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
