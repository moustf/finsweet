import { FC, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import BusinessIcon from '../assets/business.png';
import CyborgIcon from '../assets/cyborg.png';
import EconomyIcon from '../assets/economy.png';
import RocketIcon from '../assets/rocket.png';
import { styles } from './styles';

export const CategoriesSection: FC = () => {
  const [index, setIndex] = useState<number>(1);

  return (
    <Box
      sx={styles.categoriesSectionMain}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={styles.categoriesSectionH2}
      >
        Choose A Category
      </Typography>
      <Box
        sx={styles.categoreisSectionBox1}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                bgcolor: index === 1 ? 'primary.main' : '',
                ...styles.categoriesSectionBox2,
              }}
              onClick={() => setIndex(1)}
            >
              <Box sx={styles.categoriesSectionBox3}>
                <img src={BusinessIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={styles.categoriesSectionFirstH3}
              >
                Business
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={styles.categoriesSectionP1}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                bgcolor: index === 2 ? 'primary.main' : '',
                ...styles.categoriesSectionBox4,
              }}
              onClick={() => setIndex(2)}
            >
              <Box sx={styles.categoriesSectionBox5}>
                <img src={RocketIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={styles.categoriesSectionSecondH3}
              >
                Startup
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={styles.categoriesSectionP2}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                bgcolor: index === 3 ? 'primary.main' : '',
                ...styles.categoriesSectionBox6,
              }}
              onClick={() => setIndex(3)}
            >
              <Box sx={styles.categoriesSectionBox7}>
                <img src={EconomyIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={styles.categoriesSectionThirdH3}
              >
                Economy
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={styles.categoriesSectionP3}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                bgcolor: index === 4 ? 'primary.main' : '',
                ...styles.categoriesSectionBox8,
              }}
              onClick={() => setIndex(4)}
            >
              <Box sx={styles.categoriesSectionBox9}>
                <img src={CyborgIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={styles.categoriesSectionForthH3}
              >
                Technology
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={styles.categoriesSectionP4}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
