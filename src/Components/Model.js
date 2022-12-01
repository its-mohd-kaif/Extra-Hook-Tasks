import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ data }) {
  console.log("Model", data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [barcode, setBarcode] = React.useState("");

  // if (data.barcode === false) {
  //   setBarcode("Unselect");
  // } else {
  //   setBarcode("Select");
  // }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Submit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <div>
                <center>
                  <h1>Data</h1>
                </center>
              </div>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div>
                {/* <center> */}
                <table>
                  <tr>
                    <th>Title</th>
                    <td>{data.title}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{data.description}</td>
                  </tr>
                  <tr>
                    <th>Handling Time</th>
                    <td>{data.handling_time}</td>
                  </tr>
                  <tr>
                    <th>Barcode/GTIN Exemption</th>
                    <td>{data.barcode}</td>
                  </tr>
                  <tr>
                    <th>Add Amazon Category</th>
                    <td>{data.category}</td>
                  </tr>
                  <tr>
                    <th>Image Selection</th>
                    <td>{data.image_select}</td>
                  </tr>
                </table>
                {/* </center> */}
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
