import { Network } from 'mintbase';
import {
  EIconName, Item, MbDropdownMenu, MbIcon, MbMenuWrapper, MbTab,
} from 'mintbase-ui';
import { useState } from 'react';
import { useWallet } from '../services/providers/WalletProvider';

const NetworkDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { network, setNetwork, signOut } = useWallet();

  const handleOnClick = (newNetwork: Network) => {
    signOut();
    setNetwork(newNetwork);
  };

  const storeTabs: Item[] = [
    { content: <div>testnet</div>, onClick: () => handleOnClick(Network.testnet) },
    { content: <div>mainnet</div>, onClick: () => handleOnClick(Network.mainnet) },
  ];

  return (
    <MbMenuWrapper setIsOpen={setMenuOpen}>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        onKeyDown={() => setMenuOpen(!menuOpen)}
        role="button"
        tabIndex={-1}
      >
        <MbTab
          label={(
            <div className="flex space-x-8 items-center">
              <span>
                {network}
              </span>
              <div className="pointer-events-none">
                <MbIcon
                  name={
                    menuOpen
                      ? EIconName.ARROW_DROP_UP
                      : EIconName.ARROW_DROP_DOWN
                  }
                  size="16px"
                  color="blue-300"
                  darkColor="blue-100"
                />
              </div>
            </div>
          )}
          isSmall
        />
      </div>
      <MbDropdownMenu
        items={storeTabs}
        isOpen={menuOpen}
        className="mt-2"
      />
    </MbMenuWrapper>
  );
};
export default NetworkDropdown;
