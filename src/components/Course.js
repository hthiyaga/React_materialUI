import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const Course = props => {
  return (
    <Fragment>
      <div>
        {props.course ? (
          <Card>
            <CardContent>
              <Typography gutterBottom variant='headline' component='h2'>
                {props.course.fields.title}
              </Typography>
              <Typography component='p'>{props.course.fields.club}</Typography>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </Fragment>
  );
};
export default Course;
