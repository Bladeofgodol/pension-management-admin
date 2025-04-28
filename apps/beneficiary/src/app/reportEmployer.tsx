'use client';

import { useState } from 'react';
// import { Search } from "lucide-react"

import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

export default function ReportEmployer() {
  const [organization, setOrganization] = useState('Org 1');
  const [anonymity, setAnonymity] = useState('Unanimous');
  const [date, setDate] = useState('8 - March - 2025');
  const [description, setDescription] = useState('');

  const handleOrganizationChange = (event: any) => {
    setOrganization(event.target.value);
  };

  const handleAnonymityChange = (event: any) => {
    setAnonymity(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({ organization, anonymity, date, description });
    // Reset form
    setDescription('');
  };

  const previousComplaints = [
    {
      id: 1,
      organization: 'Org 1',
      date: 'March 6, 2025',
      anonymity: 'Unanimous',
      verdict: 'Your complaint was correct and contribution was mishandled',
      status: 'Resolved',
    },
    {
      id: 2,
      organization: 'Org 1',
      date: 'April 6, 2025',
      anonymity: 'Non-unanimous',
      verdict: '--',
      status: 'In review',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        <Paper elevation={0} className="p-6 mb-8">
          <Typography variant="h6" className="text-center mb-4 font-medium">
            Welcome to the Pension Complaints Page. This platform is designed to
            help beneficiaries report any concerns regarding the handling of
            their pension contributions by their organizations. If you believe
            your employer is mismanaging or failing to comply with pension
            regulations, you can submit a complaint here.
          </Typography>

          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <Typography
                  variant="caption"
                  className="text-gray-500 mb-1 block"
                >
                  Organization
                </Typography>
                <FormControl fullWidth variant="outlined" size="small">
                  <Select
                    value={organization}
                    onChange={handleOrganizationChange}
                    className="text-sm"
                  >
                    <MenuItem value="Org 1">Org 1</MenuItem>
                    <MenuItem value="Org 2">Org 2</MenuItem>
                    <MenuItem value="Org 3">Org 3</MenuItem>
                    <MenuItem value="Org 4">Org 4</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <Typography
                  variant="caption"
                  className="text-gray-500 mb-1 block"
                >
                  Anonymity
                </Typography>
                <FormControl fullWidth variant="outlined" size="small">
                  <Select
                    value={anonymity}
                    onChange={handleAnonymityChange}
                    className="text-sm"
                  >
                    <MenuItem value="Unanimous">Unanimous</MenuItem>
                    <MenuItem value="Non-unanimous">Non-unanimous</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <Typography
                  variant="caption"
                  className="text-gray-500 mb-1 block"
                >
                  Contribution Date
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={date}
                  onChange={handleDateChange}
                  InputProps={{
                    endAdornment: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  }}
                />
              </div>

              <div>
                <Typography
                  variant="caption"
                  className="text-gray-500 mb-1 block"
                >
                  Description
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  multiline
                  rows={4}
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>

              <Button
                fullWidth
                variant="contained"
                className="bg-teal-800 hover:bg-teal-900 text-white normal-case py-3 mt-4"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Paper>

        <div className="mb-4">
          <Typography variant="subtitle1" className="font-medium">
            Previous complaints
          </Typography>
        </div>

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead className="bg-gray-50">
              <TableRow>
                <TableCell className="text-gray-500 font-normal">
                  Organization
                </TableCell>
                <TableCell className="text-gray-500 font-normal">
                  Report Date
                </TableCell>
                <TableCell className="text-gray-500 font-normal">
                  Anonymity
                </TableCell>
                <TableCell className="text-gray-500 font-normal">
                  Verdict
                </TableCell>
                <TableCell className="text-gray-500 font-normal">
                  Status
                </TableCell>
                <TableCell className="text-gray-500 font-normal"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {previousComplaints.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell>{complaint.organization}</TableCell>
                  <TableCell>{complaint.date}</TableCell>
                  <TableCell>{complaint.anonymity}</TableCell>
                  <TableCell>{complaint.verdict}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        complaint.status === 'Resolved'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className="bg-teal-800 hover:bg-teal-900 text-white px-3 py-1 text-xs"
                    >
                      Conversation
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
