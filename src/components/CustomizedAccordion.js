import React from 'react';
import "./CustomizedAccordion.css";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    backgroundColor: '#7fad39',
    color: 'white',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 40,
    '&$expanded': {
      minHeight: 40,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="accordion__summaryContainer" aria-controls="panel1d-content" id="panel1d-header">
        <div className="accordion__summary">
            <MenuIcon />
            <Typography>All Departments</Typography>
            <ArrowDropDownIcon/>
        </div>
          
        </AccordionSummary>
        <AccordionDetails>
        <div className="accordion__contents">
            <div className="accordion__content">Organic Food</div>
            <div className="accordion__content">Fruits</div>
            <div className="accordion__content">Dairy & Cheese</div>
            <div className="accordion__content">Vegetable</div>
            <div className="accordion__content">Pulses and Staples</div>
            <div className="accordion__content">Bakery</div>
            <div className="accordion__content">Frozen Food</div>
            <div className="accordion__content">Seafood</div>
            <div className="accordion__content">Confectionary</div>
            <div className="accordion__content">Filipino Foods</div>
            <div className="accordion__content">Softdrinks and Beverages</div>
        </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}