import { MbButton } from 'mintbase-ui';
import { useWallet } from '../services/providers/WalletProvider';
import NetworkDropdown from './NetworkDropdown';

function Header(): JSX.Element {
  const {
    isConnected, details, signIn, signOut,
  } = useWallet();

  const buttonLabel = isConnected
    ? `Sign Out ${details.accountId}`
    : ' Connect NEAR Wallet';

  const buttonAction = isConnected ? signOut : signIn;

  return (
    <nav className="flex justify-between w-full bg-white sticky top-0 z-40 lg:border-b border-solid border-gray-400 shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-black p-2 sm:p-4">
          BetweenUs
        </h1>
      </div>
      {/** login/logout with wallet */}
      <div className="flex items-center sm:mr-2 space-x-2">
        <NetworkDropdown />
        <MbButton onClick={buttonAction} label={buttonLabel} />
      </div>
    </nav>
  );
}

export default Header;
