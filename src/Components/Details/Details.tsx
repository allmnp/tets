import * as styles from "./Details.css";
import {
  WhitepaperButton,
  SecurityAuditButton,
  TokenomicsButton,
  VestingScheduleButton,
  HowToPurchaseButton,
  FAQButton,
  JoinUsChatButton
} from "../Buttons/ActionButton";
import { Address } from "../Icons/Address";
import { Referral } from "../Icons/Referral";

export function Details() {
  return (
    <div style={styles.details}>
      <div style={styles.container}>
        <div style={styles.contentColumn}>
          <div style={styles.badge}>Minestal Details</div>
          <div style={styles.column}>
            We designed MSTL Tokens as a utility token that functions as a
            payment between participants interacting within the ecosystem in the
            Minestal App. In even simpler terms, MSTL Tokens will provide
            economic incentives to encourage participants to contribute and
            maintain the ecosystem in the Minestal App.
            <div style={styles.row}>
              <WhitepaperButton />
              <SecurityAuditButton />
              <TokenomicsButton />
              <VestingScheduleButton />
            </div>
          </div>
        </div>
        <div style={styles.contentColumn}>
          <div style={styles.badge}>What is referral address?</div>
          <div style={styles.column}>
          Your wallet address can also serve as your reference address in our MSTL sale. This means that anyone who purchase MSTL using your reference address will automatically ensures that up to 25% of the MSTL they purchase is allocated to your reference address.. As a result, you will earn a percentage of their trades and activities on the platform, helping you to grow your earnings and increase your financial portfolio. By using your own address as your reference, you have the potential to earn a passive income simply by spreading the word about our app and encouraging others to join. With this innovative feature, you have the power to shape your financial future and build a thriving network of users all while earning rewards.
            <div style={styles.referral}>
              <div style={styles.referralBock}>
                <Address />
              </div>
              <div style={styles.referralBock}>
                <Referral />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.contentRow}>
        <div style={styles.row}>
          <HowToPurchaseButton />
          <FAQButton />
        </div>
        <JoinUsChatButton />
      </div>
    </div>
  );
}
