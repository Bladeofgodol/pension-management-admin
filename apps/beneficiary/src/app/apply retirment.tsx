import { X } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function Apply() {
  const [retirementModalOpen, setRetirementModalOpen] = useState(false);

  const handleCloseRetirementModal = () => {
    setRetirementModalOpen(false);
  };
  return (
    <Dialog
      open={retirementModalOpen}
      onClose={handleCloseRetirementModal}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className="flex justify-between items-center">
        <Typography variant="h6">Retirement form</Typography>
        <Button onClick={handleCloseRetirementModal} className="min-w-0 p-1">
          <X className="h-5 w-5" />
        </Button>
      </DialogTitle>
      <DialogContent>
        <div className="space-y-4 py-2">
          <div>
            <Typography variant="caption" className="text-gray-500 mb-1 block">
              Type
            </Typography>
            <FormControl fullWidth variant="outlined" size="small">
              <Select value="Voluntary" className="text-sm">
                <MenuItem value="Voluntary">Voluntary</MenuItem>
                <MenuItem value="Mandatory">Mandatory</MenuItem>
                <MenuItem value="Early">Early</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <Typography variant="caption" className="text-gray-500 mb-1 block">
              Bank Account
            </Typography>
            <TextField fullWidth variant="outlined" size="small" />
          </div>

          <div>
            <Typography variant="caption" className="text-gray-500 mb-1 block">
              Description
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              multiline
              rows={4}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions className="flex flex-col p-4 space-y-2">
        <Button
          fullWidth
          variant="contained"
          className="bg-teal-800 hover:bg-teal-900 text-white normal-case py-3"
        >
          Submit
        </Button>
        <Button
          fullWidth
          variant="contained"
          className="bg-orange-300 hover:bg-orange-400 text-black normal-case py-3"
          onClick={handleCloseRetirementModal}
        >
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
}
