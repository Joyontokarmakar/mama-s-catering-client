import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Accordion.css';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    border: '1px solid #ddd',
    },
    heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    },
    head: {
    borderBottom: '1px solid #ddd',
    },
}));

export default function Accordionsection() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.head}
                >
                    <Typography className={classes.heading}>Premium Packages</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.head}
                >
                    <Typography className={classes.heading}>Regular Package</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel3a-header"
                    className={classes.head}
                >
                    <Typography className={classes.heading}>Weekly Special Package</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};