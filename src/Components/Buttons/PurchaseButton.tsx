import "../../styles.css";
import { useEffect, useState } from "react";
import { SwapModal } from "../SwapModal/SwapModal";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

export function PurchaseButton() {
  const { isConnected } = useAccount();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        disabled={!isConnected}
        className="primaryButton"
        onClick={() => setOpen(true)}
      >
        {isConnected ? "Purchase" : "Connect Wallet"}
      </button>
      {open ? <SwapModal open={open} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
