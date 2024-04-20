'use client'
import * as React from 'react';
import { useEffect } from 'react';
import { DataRequestBuilder, RadixDappToolkit, RadixNetwork } from '@radixdlt/radix-dapp-toolkit';


export function Header() {
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

      // send transaction
       rdt.walletApi.sendTransaction({
         transactionManifest: '\nCALL_METHOD\n\tAddress(\"account_rdx16y6spuy7pvxj3v9ruezge6dvnvjkjja70wmv8fa4c73n4csl9p3pr5\")\n\t\"withdraw\"\n\tAddress(\"resource_rdx1t4tjx4g3qzd98nayqxm7qdpj0a0u8ns6a0jrchq49dyfevgh6u0gj3\")\n\tDecimal(\"1000\")\n; \n\nTAKE_FROM_WORKTOP\n\tAddress(\"resource_rdx1t4tjx4g3qzd98nayqxm7qdpj0a0u8ns6a0jrchq49dyfevgh6u0gj3\")\n\tDecimal(\"545.454545454545454546\")\n  \tBucket(\"Astro_Multi_mi5ln\")\n;\n\n\nCALL_METHOD\n\tAddress(\"component_rdx1cqg95d25q8sa26k6996yxl3qg95edwqn4a775nf3s2zxy6tt22s9xf\")\n\t\"swap\"\n\tBucket(\"Astro_Multi_mi5ln\")\n\tAddress(\"resource_rdx1t52pvtk5wfhltchwh3rkzls2x0r98fw9cjhpyrf3vsykhkuwrf7jg8\")\n;\n\nTAKE_FROM_WORKTOP\n\tAddress(\"resource_rdx1t4tjx4g3qzd98nayqxm7qdpj0a0u8ns6a0jrchq49dyfevgh6u0gj3\")\n\tDecimal(\"454.545454545454545454\")\n  \tBucket(\"OciSimple_nkh67\")\n;\n\n\nCALL_METHOD\n\tAddress(\"component_rdx1cq7tc2pgyzawwjp4qf7ddfeq36scmkghmgl7ww4zp9tqpjuc452mp7\")\n\t\"swap\"\n\tBucket(\"OciSimple_nkh67\")\n;\n\nTAKE_ALL_FROM_WORKTOP\n\tAddress(\"resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd\")\n  \tBucket(\"OciSimple_8dh5h\")\n;\n\n\nCALL_METHOD\n\tAddress(\"component_rdx1cz89w3ecvh9jvdd892vycs44rr042lteg75zgdydq9csn5d87snvdw\")\n\t\"swap\"\n\tBucket(\"OciSimple_8dh5h\")\n;\n\nTAKE_FROM_WORKTOP\n  Address(\"resource_rdx1t52pvtk5wfhltchwh3rkzls2x0r98fw9cjhpyrf3vsykhkuwrf7jg8\")\n  Decimal(\"0.612661944691802079\")\n  Bucket(\"fee_bucket\")\n;\n\nCALL_METHOD\n\tAddress(\"component_rdx1cpxvjgh5a0mewtzkx7j8gzpq0dh676gq5t4hh3svjm02xwakmxa6l7\")\n\t\"deposit\"\n\tBucket(\"fee_bucket\")\n;\n\nCALL_METHOD\n\tAddress(\"account_rdx16y6spuy7pvxj3v9ruezge6dvnvjkjja70wmv8fa4c73n4csl9p3pr5\")\n\t\"deposit_batch\"\n\tExpression(\"ENTIRE_WORKTOP\")\n;',
       })
    const subcription = rdt.walletApi.walletData$.subscribe((res) => {
      console.log(res);
    });
    const button = rdt.buttonApi.status$.subscribe((res) => {
      console.log(res);
    })

    return () => {
      subcription.unsubscribe();
      button.unsubscribe();
    }
  }, []);     
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-end space-x-2 w-full">
        <div style={{ marginLeft: 'auto' }}>
          <radix-connect-button>Connect Wallet</radix-connect-button>
        </div>
      </div>
    </header>
  )
}
