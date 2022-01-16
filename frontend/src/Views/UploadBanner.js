import React, { useState } from "react";

import { useMoralis, useMoralisFile } from "react-moralis";
import { Moralis } from "moralis";

import { FormControl, Button, Modal } from "@mui/material";

function UploadBanner (props){
  const [file, setFile] = useState("");

  const { saveFile, moralisFile } = useMoralisFile();

  const { setUserData } = useMoralis();

  const saveFileIPFS = async (f) => {
    console.log("FILE", f);
    const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
    console.log(fileIpfs);
    console.log("moralis file ipfs:");
    console.log(fileIpfs._ipfs);
    setUserData({
        banner: fileIpfs._ipfs,
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

export default UploadBanner;
