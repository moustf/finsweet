import { FC } from 'react';
import { Box } from '@mui/material';

import { Header } from '../components/Header';
import { FeaturedPostSection } from '../components/allPostsPage/FeaturedPostSection';
import { AllPostsSection } from '../components/allPostsPage/AllPostsSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { JoinOurTeamSection } from '../components/JoinOurTeamSection';
import { Footer } from '../components/Footer';

export const AllPostsPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <FeaturedPostSection />
    <AllPostsSection />
    <CategoriesSection page="all-posts" />
    <JoinOurTeamSection page="all-posts" />
    <Footer page="all-posts" />
  </Box>
);
