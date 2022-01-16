import React, { useState } from "react";

import { useMoralis, useMoralisFile } from "react-moralis";

import { Button } from "@mui/material";

function UploadImage (props){
const [file, setFile] = useState("");

const { saveFile } = useMoralisFile();

const { setUserData } = useMoralis();

const saveFileIPFS = async (f) => {
  const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
  setUserData({
      avatar: fileIpfs._ipfs,
  })
};

const handleFinal = () => {
  saveFileIPFS(file);
};

  return (
    <>
      <Button
        variant="contained"
        component="label"
        onChange={(e) => setFile(e.target.files[0])}
        sx={{ width: "250px", mx: "auto", mt: "25px" }}
      >
        Upload new profile picture
        <input type="file" hidden />
      </Button>
      <Button
        sx={{ width: "250px", mx: "auto" }}
        variant="primary"
        onClick={handleFinal}
      >
        CHANGE
      </Button>
    </>
  );
};

export default UploadImage;
