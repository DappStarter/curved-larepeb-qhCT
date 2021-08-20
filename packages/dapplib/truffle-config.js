require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift renew magic erosion idea climb metal gas'; 
let testAccounts = [
"0xb121174fc768a89759ffabbe19b01cf2c4b9518de390d5bea82e828ffee5df51",
"0xea8a8f1fef333711347265a23ceec89f94a679cf08c0365fed0e01be4c144ee8",
"0x526bd3540adc7815deefed376e4e6293c9760b34fe4cfb87597d8e5ceff77c89",
"0x91ca4eaf43add3032df8fdb1c2a7090d38eb4786a5b7a4cbdc595a6fad25be7f",
"0x948e1105c267e2217eb399058cc654ced7c52fe7bd148b3351018549c54d0b7a",
"0x718b36a21614ac08dd77597ecc29e960262e01730d094c7d7095985b436ccb3c",
"0x3f04aa10552ddaf7354091fcba50b50de553111ec46ab6075384ccf9fa82ee00",
"0xf940c2a0976518cd1aa2a8e8b231ce11bab4427e10a995134a4e71b4101b5f63",
"0xda56a2004d4bdd89d9aa71cf737a3c454a0e68729172934542990618cb21b9af",
"0xa350fba9837272277e83909377ac61f6fa5a72c763bfd1e66930339486a86839"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

