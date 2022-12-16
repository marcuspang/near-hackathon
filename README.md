# BetweenUs

Currently incomplete.


NFT Marketplace that enables buying/selling of NFTs and NFT trading (think card games).


## Features

- Buying/Selling NFTs for NEAR
- Create trade offer for NFT <> NFT
- Accept trade offer for NFT <> NFT

## Getting Started

Run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

### Set ENV variables

Once that's done, copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

if you use windows without powershell or cygwin:

```bash
copy .env.example .env.local
```

To get your `api key` visit :

[Mintbase Developers Page for Mainnet](https://www.mintbase.io/developer):
[Mintbase Developers Page for testnet](https://testnet.mintbase.io/developer):

```
NEXT_PUBLIC_DEVELOPER_KEY=your_mintbase_api_key
```

`NEXT_PUBLIC_NETWORK` could be `testnet` or `mainnet`
```
NEXT_PUBLIC_NETWORK=testnet
```

`NEXT_PUBLIC_STORES` your store ids
```
NEXT_PUBLIC_STORES=latium.mintspace2.testnet,mufasa.mintspace2.testnet
```

## Acknowledgements

Taken from Mintbase example application [here](https://github.com/Mintbase/examples/issues).
