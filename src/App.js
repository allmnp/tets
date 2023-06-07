import "./styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/dist/chains";
import { publicProvider } from "wagmi/dist/providers/public";
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  trustWallet,
  walletConnectWallet
} from "@rainbow-me/rainbowkit/dist/wallets/walletConnectors";
import { Dashboard } from "../src/Dashboard";

const { chains, provider } = configureChains([bscTestnet], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains }),
      trustWallet({ chains }),
      walletConnectWallet({ chains })
    ]
  }
]);

const wagmiClient = createClient({
  connectors,
  provider
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={darkTheme()}
      >
        <Dashboard />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
