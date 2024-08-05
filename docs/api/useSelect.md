# useSelect

<Example class="mt-4">
  <ClentOnly>
    <useSelect-demo1 />
  </ClentOnly>
</Example>


## 🚀 特性

- 自动选择

`useSelect` 封装可选择列表和当前选择的状态，其自动选择的特性特别适合多个Tab切换的情况，这种场景往往需要自动选择第一个非禁用状态的tab，而这些，`useSelect` 都已经帮您做好了。


## API

**参数**

- `options` (UseSelectOptions): 选项

**返回值**

- (UseSelectReturn)

**types**

```ts
export type SelectItemValue = string | number

interface BaseSelectItem {
  /** ID */
  value: SelectItemValue
  /** 标题 */
  label?: string
  /** 禁用 */
  disabled?: boolean
}
export interface SelectItem extends BaseSelectItem {
  [key: string]: any
}

interface UseSelectOptions<T extends BaseSelectItem> {
  /** 选项列表 */
  items: MaybeRef<T[]>
  /** 默认值 */
  initialValue?: MaybeRef<SelectItemValue>
  /** 当没有值选中时，是否自动选中 */
  autoSelect?: MaybeRef<boolean>
}

interface UseSelectReturn<T extends BaseSelectItem> {
  /** 选项列表 */
  items: Ref<T[]>
  /** 选中值 */
  activeValue: Ref<SelectItemValue>
  /** 选中项 */
  activeItem: ComputedRef<T>
}
```

## 普通选择

<Example>
  <useSelect-demo2 />
</Example>

## 延迟的自动选择

`autoSelect` 参数可以传递一个响应式变量，这样就可以实现自动选择状态在未来变为 `true` 时，也可以自动选择第一个可用项。

<Example>
  <useSelect-demo3 />
</Example>