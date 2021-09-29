# `P2P swaps` vs `Turbo Swaps` comparison

## P2P swap, simplified
```
Peer1 -> Script1 ->,
   '<- Script2 <- Peer2
```
More information [here](/docs/P2P_SWAPS.md).


## Turbo swap, simplified
```
  Moderator
Peer1 ⇆ Peer2
```
More information [here](/docs/TURBO_SWAPS.md).


## Comparison

|                        | P2P swaps | Turbo swaps |
|------------------------|--------------|-------------|
| **Scheme**             | Indirect - use smart contracts / scripts | Direct - 2 simple txs |
| **Decentralization**   | More decentralized | Less decentralized |
| **Permission**         | Permissionless | Requires whitelisted deposited marketmakers |
| **Cost**               | Expensive ([additional transactions](/docs/P2P_SWAPS.md)) | The cheapest |
| **Speed**              | Slower ([additional steps](/docs/P2P_SWAPS.md)) | Faster |
