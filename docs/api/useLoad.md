# useLoad

<Example class="mt-4">
  <useLoad />
</Example>

## 🚀 特性

- 抽象的加载方法，不限定加载源
- 提供查询条件与loading态

## 使用方法

```ts
const { result, query, loading, load } = useLoad(async() => {
  const params = Object.entries(query).filter(([key, value]) => !!value).map(([key, value]) => `${key}=${value}`).join('&')
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`)
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

## Type Declarations

```ts
type LoadFn<Q, R> = (query: Q) => Promise<R>

interface UseLoadOptions<Q, R> {
  initialQuery?: MaybeRef<Q>
}

interface UseLoadReturn<Q, R> {
  query: Q
  result: Ref<R>
  loading: Ref<boolean>
  load: (disableLoading?: boolean) => Promise<void>
}
```


