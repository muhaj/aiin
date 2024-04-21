'use client'
import * as React from 'react';
import { useEffect } from 'react';
import { DataRequestBuilder, RadixDappToolkit, RadixNetwork } from '@radixdlt/radix-dapp-toolkit';


export function Header() {
  const [account, setAccount] = React.useState<string | null>(null);
  const [rdt, setRdt] = React.useState<RadixDappToolkit | null>(null);

  useEffect(() => {
    const rdt = RadixDappToolkit({
      dAppDefinitionAddress: 'account_rdx128344nfyq0wlj09mn3w6hylqyr7h7xralq0yu9lkvtyayhazr8m8fe',
      networkId: RadixNetwork.Mainnet, // or another network like RadixNetwork.MAINNET
      applicationName: 'Radix AI Trader',
      applicationVersion: '1.0.0',
    });
    
    rdt.walletApi.setRequestData(
      DataRequestBuilder.accounts().atLeast(1)
    );

    const subcription = rdt.walletApi.walletData$.subscribe((res) => {
      console.log(res);
      if (res.accounts.length) {
        setAccount(res.accounts[0].address)
      }
    });
    
    const button = rdt.buttonApi.status$.subscribe((res) => {
      console.log(res);
    });
    setRdt(rdt);

    return () => {
      subcription.unsubscribe();
      button.unsubscribe();
    }
  }, []);
  
  const handleTx = () => {
    fetch('https://api.astrolescent.com/partner/hackathon/swap', {
      method: 'POST',
      body: JSON.stringify({
        inputToken: 'resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd',
        outputToken: 'resource_rdx1t5pyvlaas0ljxy0wytm5gvyamyv896m69njqdmm2stukr3xexc2up9',
        inputAmount: '2',
        fromAddress: 'account_rdx128344nfyq0wlj09mn3w6hylqyr7h7xralq0yu9lkvtyayhazr8m8fe'
      })
    }).then((res) => res.json()).then((res) => {
      rdt?.walletApi.sendTransaction({
        transactionManifest: res.manifest
      });
    });
  }
  
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-end space-x-2 w-full">
        <div style={{ marginLeft: 'auto' }}>
          <radix-connect-button>Connect Wallet</radix-connect-button>
          <button onClick={handleTx}>Example Tx</button>
        </div>
      </div>
    </header>
  )
}
