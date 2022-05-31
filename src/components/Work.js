import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { Box, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';
import { workHistories } from "../data";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function Work() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <section id="work">
            <div className="container px-5 py-10 mx-auto overflow-auto">
                <div className="text-center">
                    <BriefcaseIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                        Where I've Worked
                    </h1>
                </div>
                <Box
                    sx={{ flexGrow: 1, display: 'flex', height: 350 }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs work"
                        indicatorColor="primary"
                        sx={{ borderRight: 1, borderColor: 'primary.light' }}
                    > 
                        {
                            workHistories.map((workHistory, idx) => (
                                    <Tab wrapped={true} label={<span className="text-white">{workHistory.company}</span>} {...a11yProps(idx)} />
                                )
                            )
                        }
                    </Tabs>
                    {
                        workHistories.map((workHistory, idx) => (
                                <TabPanel value={value} index={idx}>
                                    <div>
                                        <h2 className="text-white text-lg font-medium title-font text-white mb-2">
                                            {workHistory.title} @ <span className="text-teal-400">{workHistory.company}</span>
                                        </h2>
                                        <span className="leading-relaxed">{workHistory.duration}</span>
                                        <List dense>
                                                {
                                                    workHistory.descriptions.map((description) => (
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <ArrowRightIcon className="w-5 h-5 text-teal-400" />
                                                            </ListItemIcon>
                                                            <ListItemText className="leading-relaxed">
                                                                {description}
                                                            </ListItemText>
                                                        </ListItem>
                                                        )
                                                    )
                                                }
                                        </List>
                                    </div>
                                </TabPanel>
                            )
                        )
                    }
                </Box>
            </div>
        </section>
        
    );
}