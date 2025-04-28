'use client';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import type React from 'react';
import { useState } from 'react';
// import { Search, Download, Filter, ChevronLeft } from "lucide-react"
import {
  Button,
  FormControl,
  MenuItem,
  Pagination,
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
import { Link } from 'react-router-dom';

export default function AllContributions() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterOrg, setFilterOrg] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDate, setFilterDate] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleFilterOrgChange = (event: any) => {
    setFilterOrg(event.target.value);
  };

  const handleFilterStatusChange = (event: any) => {
    setFilterStatus(event.target.value);
  };

  const handleFilterDateChange = (event: any) => {
    setFilterDate(event.target.value);
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  // Sample data for contributions
  const contributionsData = [
    {
      id: 1,
      organization: 'Org 1',
      date: 'March 6, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1500 birr',
      status: 'Completed',
    },
    {
      id: 2,
      organization: 'Org 1',
      date: 'April 6, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1000 birr',
      status: 'Incomplete',
    },
    {
      id: 3,
      organization: 'Org 1',
      date: 'May 10, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1500 birr',
      status: 'Delayed',
    },
    {
      id: 4,
      organization: 'Org 1',
      date: 'June 6, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1500 birr',
      status: 'Completed',
    },
    {
      id: 5,
      organization: 'Org 2',
      date: 'February 15, 2025',
      expectedContribution: '1200 birr',
      contributionAmount: '1200 birr',
      status: 'Completed',
    },
    {
      id: 6,
      organization: 'Org 2',
      date: 'March 15, 2025',
      expectedContribution: '1200 birr',
      contributionAmount: '1200 birr',
      status: 'Completed',
    },
    {
      id: 7,
      organization: 'Org 3',
      date: 'January 20, 2025',
      expectedContribution: '1800 birr',
      contributionAmount: '1800 birr',
      status: 'Completed',
    },
    {
      id: 8,
      organization: 'Org 3',
      date: 'February 20, 2025',
      expectedContribution: '1800 birr',
      contributionAmount: '0 birr',
      status: 'Missing',
    },
    {
      id: 9,
      organization: 'Org 4',
      date: 'March 1, 2025',
      expectedContribution: '400 birr',
      contributionAmount: '400 birr',
      status: 'Completed',
    },
    {
      id: 10,
      organization: 'Org 1',
      date: 'July 6, 2025',
      expectedContribution: '1500 birr',
      contributionAmount: '1500 birr',
      status: 'Pending',
    },
    {
      id: 11,
      organization: 'Org 2',
      date: 'April 15, 2025',
      expectedContribution: '1200 birr',
      contributionAmount: '1000 birr',
      status: 'Incomplete',
    },
    {
      id: 12,
      organization: 'Org 3',
      date: 'March 20, 2025',
      expectedContribution: '1800 birr',
      contributionAmount: '1800 birr',
      status: 'Completed',
    },
  ];

  // Filter and sort data
  const filteredData = contributionsData.filter((item) => {
    if (filterOrg !== 'All' && item.organization !== filterOrg) return false;
    if (filterStatus !== 'All' && item.status !== filterStatus) return false;
    if (filterDate && !item.date.includes(filterDate)) return false;
    return true;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'date') {
      return sortDirection === 'asc'
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'organization') {
      return sortDirection === 'asc'
        ? a.organization.localeCompare(b.organization)
        : b.organization.localeCompare(a.organization);
    } else if (sortBy === 'amount') {
      const aAmount = Number.parseInt(a.contributionAmount.split(' ')[0]);
      const bAmount = Number.parseInt(b.contributionAmount.split(' ')[0]);
      return sortDirection === 'asc' ? aAmount - bAmount : bAmount - aAmount;
    }
    return 0;
  });

  // Paginate data
  const paginatedData = sortedData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div>
      {/* Header */}

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Link
              to="/home"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowBackIosIcon className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <Button
            variant="outlined"
            startIcon={<DownloadOutlinedIcon />}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Export Data
          </Button>
        </div>

        <Paper elevation={0} className="p-6 mb-8">
          <Typography variant="h5" className="mb-6 font-bold">
            All Contributions
          </Typography>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <Typography
                variant="caption"
                className="text-gray-500 mb-1 block"
              >
                Organization
              </Typography>
              <FormControl fullWidth variant="outlined" size="small">
                <Select
                  value={filterOrg}
                  onChange={handleFilterOrgChange}
                  className="text-sm"
                >
                  <MenuItem value="All">All Organizations</MenuItem>
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
                Status
              </Typography>
              <FormControl fullWidth variant="outlined" size="small">
                <Select
                  value={filterStatus}
                  onChange={handleFilterStatusChange}
                  className="text-sm"
                >
                  <MenuItem value="All">All Statuses</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Incomplete">Incomplete</MenuItem>
                  <MenuItem value="Delayed">Delayed</MenuItem>
                  <MenuItem value="Missing">Missing</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <Typography
                variant="caption"
                className="text-gray-500 mb-1 block"
              >
                Date
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Search by date"
                value={filterDate}
                onChange={handleFilterDateChange}
              />
            </div>

            <div className="flex items-end">
              <Button
                variant="contained"
                startIcon={<FilterAltOutlinedIcon />}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                fullWidth
              >
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead className="bg-gray-50">
                <TableRow>
                  <TableCell
                    className="text-gray-500 font-medium cursor-pointer"
                    onClick={() => handleSort('organization')}
                  >
                    <div className="flex items-center">
                      Organization
                      {sortBy === 'organization' && (
                        <span className="ml-1">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell
                    className="text-gray-500 font-medium cursor-pointer"
                    onClick={() => handleSort('date')}
                  >
                    <div className="flex items-center">
                      Contribution Date
                      {sortBy === 'date' && (
                        <span className="ml-1">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-500 font-medium">
                    Expected Contribution
                  </TableCell>
                  <TableCell
                    className="text-gray-500 font-medium cursor-pointer"
                    onClick={() => handleSort('amount')}
                  >
                    <div className="flex items-center">
                      Contribution Amount
                      {sortBy === 'amount' && (
                        <span className="ml-1">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-500 font-medium">
                    Status
                  </TableCell>
                  <TableCell className="text-gray-500 font-medium">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.organization}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.expectedContribution}</TableCell>
                    <TableCell>{row.contributionAmount}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          row.status === 'Completed'
                            ? 'bg-blue-100 text-blue-800'
                            : row.status === 'Incomplete'
                            ? 'bg-red-100 text-red-800'
                            : row.status === 'Delayed'
                            ? 'bg-orange-100 text-orange-800'
                            : row.status === 'Missing'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {row.status !== 'Completed' && (
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs"
                        >
                          Report
                        </Button>
                      )}
                      <Button
                        variant="text"
                        size="small"
                        className="text-blue-600 hover:text-blue-800 px-3 py-1 text-xs"
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              <Typography variant="body2" className="text-gray-500">
                Rows per page:
              </Typography>
              <FormControl variant="outlined" size="small">
                <Select
                  value={rowsPerPage}
                  onChange={handleChangeRowsPerPage as any}
                  className="text-sm"
                  MenuProps={{ disableScrollLock: true }}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body2" className="text-gray-500">
                {(page - 1) * rowsPerPage + 1}-
                {Math.min(page * rowsPerPage, filteredData.length)} of{' '}
                {filteredData.length}
              </Typography>
            </div>
            <Pagination
              count={Math.ceil(filteredData.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              shape="rounded"
              color="primary"
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}
