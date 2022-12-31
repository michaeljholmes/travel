import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Itinerary {
  startPointLat: string;
  startPointLng: string;
  endpointLat: string;
  endpointLng: string;
  title: string;
  description: string;
}

interface ItineraryAccordianProps {
  itinerary: Itinerary[];
}

export const ItineraryAccordion = ({ itinerary }: ItineraryAccordianProps) => {
  return (
    <div>
      {itinerary.map(({ title, description }) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
