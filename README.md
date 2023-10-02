# Mint Web Template

A simple base website for minting NFTs.

## Usage

To use this template, select it when creating a new repository.

```
yarn
yarn start
```

### Images

Update the logos:

- public/favicon.ico
- public/logo_192.png
- public/img/logo_app.png

Update the banner image `public/img/banner.png`.
This will be positioned behind the hero text on the home page.
This image may be stretched on some devices.
Recommended size `1920 x 540`.

Update the about image `public/img/about.png`.
This will appear below the About section.
This image will not be stretched.

### Content

The content is spread through various files.

Update the content in `src/config/content.tsx`.

Note: When social links are empty (e.g. `export const DISCORD_LINK = ''`) then they will not display.

#### Metadata

Update the `name` in `package.json`.

Update the metadata in `public/index.html`.

Update the manifest `public/manifest.json`.

### Terms and Conditions

Update `src/config/terms.md` with the terms and conditions.
This file supports [Markdown formatting](https://www.markdownguide.org/basic-syntax/).

### Roadmap

Update `src/config/roadmap.md` with your roadmap.
This file supports [Markdown formatting](https://www.markdownguide.org/basic-syntax/).

### Team

Update `TEAM_MEMBERS` in `src/config/content.md` with your team members.
Ensure the team's images are placed in `public/img/` directory and the filenames match those used above.

#### Header / Footer

The header content is located in `src/components/Header/`
The footer content is located in `src/components/Footer/`

### Web3 - DEV NEEDED

Update `src/abi/tokenABI.json` to match the contract ABI.

Update the contract addresses in `src/config/chain.tsx`.

```js
export const getContractId = (chainId: number): string => chainId === 4 ? '0xXXX' : 'PUT CONTRACT ADDRESS HERE'`
```

Update the max supply in `src/config/chain.tsx`.

Update the mint integration in `src/components/Minting/Minting.tsx`.
Currently:

```js
const tx = await nftContract.mint(await signer.getAddress(), 1)
```

Update the allowlist addresses in `src/config/allowlist.tsx`.
Each address is on a new line in the format `'0xaddress',`.

### Fonts

Add any required font files to `src/fonts/`.

Update the `font-face` and `font-family` in `src/index.css`.

Update the `standardFontFamily` in `src/config/jss-vars.tsx`.

### Colours

Update the colours in `src/config/colours.tsx`.

If you are using a light theme, update `TOAST_THEME` to `light`.

**Note**: If you are renaming the colours you will have to rename the references too.

### Deployment

Make sure all your work is committed.

Run `yarn deploy`.

Check `Github > Settings > Github Pages` to make sure your DNS is set correctly.
