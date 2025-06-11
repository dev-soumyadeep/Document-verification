import React from 'react';
import { TextField, Box } from '@mui/material';

interface OrganizationFormProps {
  formData: {
    orgName?: string;
    email: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRegister?: boolean;
}

const OrganizationForm: React.FC<OrganizationFormProps> = ({ formData, handleInputChange,isRegister }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {
        isRegister ?
        <Box>
        <label 
          htmlFor="orgName" 
          className="block text-sm font-medium text-slate-700 mb-1.5"
          style={{ marginBottom: '0.375rem' }}
        >
          Organization Name
        </label>
        <TextField
          id="orgName"
          required
          fullWidth
          name="orgName"
          value={formData.orgName}
          onChange={handleInputChange}
          placeholder="Enter your organization name"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              '& fieldset': {
                borderColor: 'rgb(203, 213, 225)',
              },
              '&:hover fieldset': {
                borderColor: '#114897',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#114897',
                borderWidth: '1px',
              },
            },
            '& .MuiInputBase-input': {
              fontSize: '0.875rem',
              fontWeight: 'normal',
              color: 'rgb(15, 23, 42)',
              '&::placeholder': {
                color: 'rgb(148, 163, 184)',
                opacity: 1,
              },
            },
          }}
        />
      </Box>: null
      }


      <Box>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-slate-700 mb-1.5"
          style={{ marginBottom: '0.375rem' }}
        >
          Email
        </label>
        <TextField
          id="email"
          required
          fullWidth
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="you@example.com"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              '& fieldset': {
                borderColor: 'rgb(203, 213, 225)',
              },
              '&:hover fieldset': {
                borderColor: '#114897',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#114897',
                borderWidth: '1px',
              },
            },
            '& .MuiInputBase-input': {
              fontSize: '0.875rem',
              fontWeight: 'normal',
              color: 'rgb(15, 23, 42)',
              '&::placeholder': {
                color: 'rgb(148, 163, 184)',
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      <Box>
        <label 
          htmlFor="password" 
          className="block text-sm font-medium text-slate-700 mb-1.5"
          style={{ marginBottom: '0.375rem' }}
        >
          Password
        </label>
        <TextField
          id="password"
          required
          fullWidth
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              '& fieldset': {
                borderColor: 'rgb(203, 213, 225)',
              },
              '&:hover fieldset': {
                borderColor: '#114897',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#114897',
                borderWidth: '1px',
              },
            },
            '& .MuiInputBase-input': {
              fontSize: '0.875rem',
              fontWeight: 'normal',
              color: 'rgb(15, 23, 42)',
              '&::placeholder': {
                color: 'rgb(148, 163, 184)',
                opacity: 1,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default OrganizationForm;