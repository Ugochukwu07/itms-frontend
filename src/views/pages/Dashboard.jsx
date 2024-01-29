import React, { useState } from "react";

import HelpIcon from "@mui/icons-material/Help";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';


import { Dashboard as DashboardLayout } from "../layouts/Dashboard";
const Input = styled(MuiInput)`
  width: 42px;
`;

const PrettoSlider = styled(Slider)({
  color: '#414040',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#7E7E7E',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#414040',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function Dashboard() {
  const [show, setShow] = useState(true);
  const [zone, setZone] = useState("1");
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <DashboardLayout>
      <div className="dash__header">
        <div className="question__icon">
          <HelpIcon />
        </div>
        <div className="search_bar">
          <div className="left">
            <div className="search__box">
              <ManageSearchIcon fontSize="large" />
              <input type="text" placeholder="Search for Settings" />
            </div>
          </div>
          <div className="icon">
            <SettingsIcon />
            <SupervisedUserCircleIcon />
          </div>
        </div>
      </div>
      <div className="dash_body">
        <div className="title">
          <h2>Settings</h2>
          <hr />
        </div>
        <div className="settings">
          <Accordion
            // defaultExpanded
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Account settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box set">
                <p>Time zone</p>
                <div className="set_action">
                  <div className={`opt ${show ? "shown" : "hidden"}`}>
                    <p>GMT+1</p>
                    <EditIcon
                      className={"ico"}
                      onClick={() => setShow(!show)}
                    />
                  </div>
                  <div className={`opt ${!show ? "shown" : "hidden"}`}>
                    <input
                      type="number"
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="input"
                      max={12}
                    />
                  </div>
                </div>
              </div>
              <div className="set-box set">
                <p>Location</p>
                <div className="set_action">
                  <div className={`opt ${show ? "shown" : "hidden"}`}>
                    <p>Awka</p>
                    <EditIcon
                      className={"ico"}
                      onClick={() => setShow(!show)}
                    />
                  </div>
                  <div className={`opt ${!show ? "shown" : "hidden"}`}>
                    <input
                      type="number"
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="input"
                      max={12}
                    />
                  </div>
                </div>
              </div>
              <div className="set-box set">
                <p>Security</p>
                <div className="set_action">
                  <div className={`opt ${show ? "shown" : "hidden"}`}>
                    <p>Password set</p>
                    <EditIcon
                      className={"ico"}
                      onClick={() => setShow(!show)}
                    />
                  </div>
                  <div className={`opt ${!show ? "shown" : "hidden"}`}>
                    <input
                      type="number"
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="input"
                      max={12}
                    />
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Values of signal time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box">
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultRed
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultGreen
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultYellow
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Average intersection time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box">
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultRed
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultGreen
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultYellow
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>


          <Accordion
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Cars count at traffic signal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box">
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultRed
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultGreen
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultYellow
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>



          <Accordion
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Red signal time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box">
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultRed
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultGreen
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultYellow
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>


          <Accordion
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Coordinates of start</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box">
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultRed
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultGreen
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultYellow
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>


          <Accordion
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Gap between vehicles</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box">
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultRed
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultGreen
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultYellow
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>


          <Accordion
            style={{
              backgroundColor: "#656565",
              color: "white",
              marginBottom: "1rem",
              border: "none",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="title_text">Signal image, tier, and vehicle count</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="set-box">
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultRed
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultGreen
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="box" sx={{ width: "100%" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Typography id="input-slider" gutterBottom>
                        defaultYellow
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "space-between" }} item xs={2}>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <Button style={{ borderRadius: "1000px", backgroundColor : "#3D3D3D", border: "none", color: "#A4A4A4" }} variant="outlined">Set</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
