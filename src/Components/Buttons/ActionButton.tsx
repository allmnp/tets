import "../../styles.css";
import { Whitepaper } from "../Icons/Whitepaper";
import { SecurityAudit } from "../Icons/SecurityAudit";
import { Tokenomics } from "../Icons/Tokenomics";
import { VestingSchedule } from "../Icons/VestingSchedule";
import { HowToPurchase } from "../Icons/HowToPurchase";
import { FAQ } from "../Icons/FAQ";
import { JoinUsChat } from "../Icons/JoinUsChat";
import { motion } from "framer-motion";

export function WhitepaperButton() {
  return (
    <motion.button
      className="ActionButton"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Whitepaper />
      Whitepaper
    </motion.button>
  );
}

export function SecurityAuditButton() {
  return (
    <motion.button
      className="ActionButton"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <SecurityAudit />
      Security Audit
    </motion.button>
  );
}

export function TokenomicsButton() {
  return (
    <motion.button
      className="ActionButton"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Tokenomics />
      Tokenomics
    </motion.button>
  );
}

export function VestingScheduleButton() {
  return (
    <motion.button
      className="ActionButton"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <VestingSchedule />
      Vesting Schedule
    </motion.button>
  );
}

export function HowToPurchaseButton() {
  return (
    <motion.button
      className="ActionButton"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <HowToPurchase />
      How to purchase?
    </motion.button>
  );
}

export function FAQButton() {
  return (
    <motion.button
      className="ActionButton"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FAQ />
      FAQ
    </motion.button>
  );
}

export function JoinUsChatButton() {
  return (
    <motion.button
      className="ActionButton"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <JoinUsChat />
      Join us chat!
    </motion.button>
  );
}
