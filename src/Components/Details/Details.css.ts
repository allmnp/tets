import { isMobile } from "../../utils/isMobile";

const mobile = isMobile();

export const details = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "15px",
  gap: mobile ? "50px" : "auto",
  borderRadius: "20px",
  border: "1px solid #252525"
};

export const container = {
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "50px"
};

export const column = {
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  color: "#666666",
  fontWeight: "500",
  fontSize: "16px"
};

export const row = {
  width: "fit-content",
  height: "fit-content",
  display: "flex",
  flexDirection: mobile ? "column" : "row",
  gap: "10px"
};

export const badge = {
  width: "fit-content",
  height: "fit-content",
  padding: "6px",
  backgroundColor: "#1A1A1A",
  borderRadius: "10px",
  border: "1px solid #252525",
  color: "#B2B2B2",
  fontWeight: "800",
  fontSize: "12px"
};

export const contentColumn = {
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "30px"
};

export const contentRow = {
  width: mobile ? "fit-content" : "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: mobile ? "column" : "row",
  justifyContent: "space-between",
  gap: "10px"
};

export const referral = {
  width: "100%",
  display: "flex",
  flexDirection: mobile ? "column" : "row",
  gap: "20px"
};
export const referralBock = {
  width: "100%",
  height: "183px",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#0d0d0d",
  border: "1px solid #1a1a1a",
  borderRadius: "20px",
  overflow: "hidden"
};
