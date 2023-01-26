import { FC } from 'react';
import { Box } from '@mui/material';

import { Header } from '../components/Header';
import { HeadingSection } from '../components/contactUsPage/HeadingSection';
import { ContactsCard } from '../components/contactUsPage/ContactsCard';
import { ContractsForm } from '../components/contactUsPage/ContactsForm';

export const ContactUsPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <HeadingSection />
    <ContactsCard />
    <ContractsForm />
  </Box>
);
