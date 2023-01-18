import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Dashboard() {
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const classes = useStyles();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const driversfeedback = await axios.get('/api/driversfeedback', { headers });
        const commutersfeedback = await axios.get('/api/commutersfeedback', { headers });
        const complains = await axios.get('/api/complains', { headers });
        const staffbookings = await axios.get('/api/staffbookings', { headers });
        const tripbookings = await axios.get('/api/tripbookings', { headers });
        setData({driversfeedback:driversfeedback.data,commutersfeedback:commutersfeedback.data,complains:complains.data,staffbookings:staffbookings.data,tripbookings:tripbookings.data});
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const getUser = async() => {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const user = await axios.get('/api/users', { headers });
        setUser(user.data);
    }
    getUser();
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {
          Object.entries(data).map(([key, value]) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {key}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {value.length}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

export default Dashboard;