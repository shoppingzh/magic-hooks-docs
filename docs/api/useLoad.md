# useLoad

<Example class="mt-4">
  <ClentOnly>
    <useLoad />
  </ClentOnly>
</Example>

## 🚀 特性

- 抽象的加载方法，不限定加载源
- 提供查询条件与loading态
- 加载完成状态

## 使用方法

```ts
const { result, query, loading, load } = useLoad(async() => {
  const params = Object.entries(query)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => `${key}=${value}`).join('&')
  const url = `https://jsonplaceholder.typicode.com/posts?${params}`
  const res = await fetch(url)
  const data: any[] = await res.json()
  return data
}, {
  initialQuery: {
    userId: null,
  }
})

load()
```


## API

**参数**

- `fn` (LoadFn): 加载方法
- `options` (UseLoadOptions): 配置项

**返回值**

(UseLoadReturn)

**types**

```ts
export type LoadFn<Q, R> = (query: Q) => Promise<R>

export interface UseLoadOptions<Q, R> {
  /** 初始查询条件 */
  initialQuery?: MaybeRef<Q>
  /** 默认加载结果 */
  initialResult?: MaybeRef<R>
  /** 加载中状态 */
  loading?: MaybeRef<boolean>
  /** 自动加载 */
  autoLoad?: boolean
}

export interface UseLoadReturn<Q, R> {
  /** 查询条件 */
  query: Q
  /** 结果 */
  result: Ref<R>
  /** 加载中状态 */
  loading: Ref<boolean>
  /** 加载完成状态(只读) */
  loaded: ComputedRef<boolean>
  /** 加载 */
  load: (disableLoading?: boolean) => Promise<void>
}

```


