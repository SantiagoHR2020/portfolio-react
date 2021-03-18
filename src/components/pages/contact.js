import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Paper } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        margin: 'auto',
        justifyContent: 'center',
    },
    bullet: {
        display: 'inline-block',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    typography: {
        margin: '.25rem',
    },
    paper: {
        padding: 'rem3',
        margin: 'auto',
        maxWidth: 950,
        borderRadius: '1.25rem',
    },
});

export default function Contact() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Paper className={classes.paper} elevation10>
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        className={classes.typography}
                    >
                        <b>Contact Info</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typography}
                    >
                        <b>E-Mail: </b> <a href='mailto:santiagohr81@hotmail.com'>santiagohr81@gmail.com</a>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typography}
                    >
                        <b>GitHub User:</b>  <a
                            href="https://github.com/SantiagoHR2020"
                            target="_blank"
                        > SantiagoHR2020
                        </a>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typography}
                    >
                        <b>GitHub Repo:</b>{' '}
                        <a
                            href="https://github.com/SantiagoHR2020"
                            target="_blank"
                        >
                            https://github.com/SantiagoHR2020
                        </a>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className={classes.typography}
                    >
                        <b> LinkedIn:</b>{' '}
                        <a
                            href="https://www.linkedin.com/in/santiago-hincapie/"
                            target="_blank"
                        >
                            {' '}
                            https://www.linkedin.com/in/santiago-hincapie/
                        </a>
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
}
