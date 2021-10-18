import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMasterContext } from "../../../MasterContext";

const Loading = () => {
  const { below_md } = useMasterContext();
  let demoData = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Box sx={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center`, my: 7 }}>
        {demoData.map((item) => {
          return <Skeleton animation="wave" variant="rectangular" sx={{ m: 1 }} width={below_md ? `100%` : 345} height={250} />;
        })}
      </Box>
    </>
  );
};

export default Loading;
