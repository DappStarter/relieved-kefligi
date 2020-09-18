require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember hole grid globe flush squeeze'; 
let testAccounts = [
"0x5be2dd66946c22de1a7b8e81dd0259916d422af911d0310fe86dc3e01635ee5e",
"0x7e06c456842f6013adc7aafff3e09c4c5ef34781dbee498d561bfdc1a9cc7eda",
"0x5afb542535d4f126a647cdd95539228be8e9a372ad94fa6cd125bad16dcf582c",
"0x2f08d3a98c95e3b55f0847f54696ba8e1b2fcaf674db57c52a0d105303fcf3ce",
"0x0f4f9af19f5d2cc313725381b0fc10bd580953b0b29d46fd5e3f4d7cd5bf0c33",
"0xd158fa45bb5648aa35006019c9e5ac9b13a3c0c1f643b5bcbe913bd7a15419f6",
"0x7b747a5cf1c945718849f13158464388d3a6a0df77ef3f5bf00aefe144063130",
"0xc6cb07e9091e6c740394cb600740d8918c8879281cf74ed27f9b62ada8ae7630",
"0xd994ecaf3cd1d149d165f5eaf81c041fc02d0fee9a37d2c9b05c019eeec9d36c",
"0xabcf28ecce8f1685553d64a1480564d380def07a3bb3e94a74d34e159ca2ba97"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
