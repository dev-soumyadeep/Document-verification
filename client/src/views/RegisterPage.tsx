import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Tab,
  Tabs,
  Button,
  Typography,
} from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import TabPanel from '../components/registerpage/TabPanel';
import OrganizationForm from '../components/registerpage/OrganizationForm';
import IndividualForm from '../components/registerpage/IndividualForm';
import Navbar from '../components/utils/Navbar';

const navbaroptions = [
  
    { label: "Product", path: "/product" },
    { label: "Pricing", path: "/pricing" },
    { label: "Solution", path: "/solution" }
  
];

const RegisterPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    orgName: '',
    username: '',
    email: '',
    password: ''
  });

  const organizationText = "An Organization can issue any number of docs. More authentic documents you issue more you earn";
  const individualText = "More authentic document you display, more score you get. Try to be as honest as you can while sharing your documents";

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Navbar options={navbaroptions}/>
      <Container maxWidth={false} 
        sx={{ 
          mt: 8,
          maxWidth: '30vw'
        }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 700, 
              mb: 1,
              color: 'text.primary' 
            }}>
              Create your account
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'text.secondary',
              fontWeight: 500 
            }}>
              Choose your role to get started
            </Typography>
          </Box>

          <Card sx={{ 
            width: '100%',
            maxWidth: 'lg',
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            bgcolor: 'background.paper',
            p: 4
          }}>
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange} 
                  variant="fullWidth"
                  sx={{
                    bgcolor: 'grey.100',
                    borderRadius: 2,
                    p: 0.5,
                    '& .MuiTab-root': {
                      borderRadius: 1.5,
                      mx: 0.5,
                      fontSize: '0.675rem',
                      color: 'text.secondary',
                      '&.Mui-selected': {
                        bgcolor: 'white',
                        color: 'text.primary',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }
                    }
                  }}
                >
                  <Tab label="Organization (Issuer)" />
                  <Tab label="Individual (Holder)" />
                </Tabs>

                <Box sx={{ 
                  mt: 3,
                  p: 2,
                  bgcolor: '#f0f7ff',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'primary.200'
                }}>
                  <TypeAnimation
                    key={tabValue}
                    sequence={[
                      tabValue === 0 ? organizationText : individualText,
                      1000
                    ]}
                    wrapper="div"
                    speed={50}
                    style={{ 
                      fontSize: '0.875rem',
                      textAlign: 'center',
                      color: 'text.secondary'
                    }}
                    repeat={1}
                  />
                </Box>
              </Box>

              <form onSubmit={handleSubmit}>
                <TabPanel value={tabValue} index={0}>
                  <OrganizationForm formData={formData} handleInputChange={handleInputChange} isRegister={true} />
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <IndividualForm formData={formData} handleInputChange={handleInputChange} isRegister={true} />
                </TabPanel>

                <Box sx={{ mt: 4 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      bgcolor: '#114897',
                      height: '48px',
                      textTransform: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: '#0f3c7a'
                      }
                    }}
                  >
                    Sign up
                  </Button>
                </Box>

                <Typography variant="caption" sx={{ 
                  display: 'block',
                  textAlign: 'center',
                  color: 'text.secondary',
                  mt: 3
                }}>
                  By signing up, you agree to our{' '}
                  <Typography
                    component="a"
                    variant="caption"
                    href="#"
                    sx={{ 
                      color: '#114897',
                      fontWeight: 500,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Terms of Service
                  </Typography>
                  {' '}and{' '}
                  <Typography
                    component="a"
                    variant="caption"
                    href="#"
                    sx={{ 
                      color: '#114897',
                      fontWeight: 500,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Typography>
              </form>
            </CardContent>
          </Card>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Already have an account?{' '}
            <Typography
              component="a"
              variant="body2"
              href="/login"
              sx={{ 
                color: '#114897',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Log in
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;