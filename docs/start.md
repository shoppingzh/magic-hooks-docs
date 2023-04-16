# 快速入手

## 安装

:::code-group

```bash [pnpm]
pnpm i magic-hooks
```

```bash [yarn]
yarn add magic-hooks
```

```bash [npm]
npm i magic-hooks
```
:::


## 使用

```ts
import { useLoad } from 'magic-hooks/lib/core'

const { result, load } = useLoad(() => Promise.resolve([1, 2, 3]))

load()
```
