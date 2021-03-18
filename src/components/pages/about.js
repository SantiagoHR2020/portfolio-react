import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Typography,
    ButtonBase,
    Button,
    Container,
} from '@material-ui/core';
import proPic from '../../assets/images/03000_13094.jpg';
import Resume from '../../assets/SantiagoHincapieResumeFullStack.docx.pdf';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(4),
        margin: 'auto',
        maxWidth: 950,
        borderRadius: '1.25rem',
    },
    image: {
        width: 220,
        height: 220,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    main: {
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        margin: 'auto',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Paper className={classes.paper} elevation10>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.img}
                                alt="complex"
                                src={proPic}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h2">
                                    <b> About Me:</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    I am a Software Engineer | Full Stack Developer leveraging
                                    project management and business intelligence
                                    background to build websites, apps, and
                                    dashboards, seeking an opportunity as a Full
                                    Stack Developer for an industry leading
                                    company. Recently earned a certificate in
                                    full stack development from the University
                                    of Central Florida, enhancing my skills in
                                    responsive web design JavaScript, React.js,
                                    Node.js, MySQL, and MongoDB. I have used
                                    these technologies as well as API’s and
                                    others to develop an application for an
                                    Ecommerce site.
                                    <br />
                                    <br />
                                    In my professional experiences thus far I am
                                    known as someone who is adaptable to
                                    changing requirements and priorities, with
                                    an ability to work well with others. I am
                                    passionate about developing applications,
                                    learning new skills, and continuing to
                                    improve. My drive to learn combined with my
                                    technical skills and my project management
                                    and business intelligence background would
                                    make me a strong addition to your
                                    organization.
                                </Typography>
                                <br />

                                <Typography variant="body2" gutterBottom>
                                    For a more complete list of skills please
                                    refer to my resume below.
                                </Typography>
                                <br />
                                <Container className={classes.container}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={Resume}
                                        target="_blank"
                                    >
                                        Resume
                                    </Button>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}
