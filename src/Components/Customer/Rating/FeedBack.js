import {
  // Button,
  Card, CardContent, Grid, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Radio, Rating } from './RatingStyles';

const questions = ['quasi cupiditate. Voluptatum ducimus voluptates voluptas?', 'quasi cupiditate. Voluptatum ducimus voluptates voluptas?', 'quasi cupiditate. Voluptatum ducimus voluptates voluptas?'];

export default function FeedBack() {
  const [rate, setRate] = useState(0);
  return (
    <Grid height="100vh" border="1px solid red" backgroundColor="#E6E7E9">
      <Grid height="70px" container alignItems="center" justifyContent="center">
        logo
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          img
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ padding: '2% 2%' }}>
            <CardContent>
              <Grid container alignItems="center" flexDirection="column" justifyContent="center">
                <Typography variant="h6">
                  Hello Customer, Please give us Feedback of your last visit.
                </Typography>
                <br />
                <Grid item container flexDirection="column">
                  {questions.map((question) => (
                    <Grid item container>
                      <Typography fontSize="1.1rem" margin="2% 0%">
                        {question}
                      </Typography>
                      <Grid container>
                        {[...Array(5)].map((item, index) => {
                          const givenRating = index + 1;
                          return (
                            <>
                              <Radio
                                type="radio"
                                value={givenRating}
                                onClick={() => {
                                  setRate(givenRating);
                                  // alert(`Are you sure you want to give ${givenRating} stars ?`);
                                }}
                              />
                              <Rating>
                                <StarBorderIcon
                                  style={{
                                    height: '40px',
                                  }}
                                  color={
                                    givenRating < rate || givenRating === rate
                                      ? '000'
                                      : 'rgb(192,192,192)'
                                  }
                                />
                              </Rating>
                            </>
                          );
                        })}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

              </Grid>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          img2
        </Grid>
      </Grid>
    </Grid>
  );
}
