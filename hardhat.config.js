require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bIc2FPNt3hpKfCCdqAMJzoHu8sFX8oYq',
      accounts: ['3efec0350dffd1abad5dfac57ae148f4c8798b5544e7c7ba64381d456e612c19'],
    },
  },
};