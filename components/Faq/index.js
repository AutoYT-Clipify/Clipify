import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = ({faq}) => {

    return (
        <div className='mt-[10rem] lg:mt-[10rem] px-[4rem] lg:px-0 lg:mb-[5rem]'>
            <h2 className="flex justify-center text-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[5rem] lg:mb-[3rem] mb-[5rem]">
            Frequently Asked Questions
            </h2>
            <div className='lg:w-[80%] m-auto'>
                {faq?.faq?.map((i, index) => (
                    <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <p className='medium text-left  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[2.2rem] text-[#000]'>{i?.question}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='medium text-left  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[2rem] text-[#5C5C5C]'>
                        {i?.answer}
                        </p>
                    </AccordionDetails>
                </Accordion>
                ))}
                
                {/* <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
            </div>

        </div>
    )
}

export default Faq