<template>
  <div>
    <el-form inline @submit.prevent>
      <el-form-item label="用户ID">
        <el-input v-model="query.userId" clearable @keydown.enter="load()" @clear="load()" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="load()">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <el-table v-loading="loading" :data="result" max-height="500">
    <el-table-column prop="userId" label="用户ID" align="center" min-width="60"></el-table-column>
    <el-table-column prop="title" label="标题" show-overflow-tooltip min-width="120"></el-table-column>
    <el-table-column prop="body" label="内容" show-overflow-tooltip min-width="200"></el-table-column>
  </el-table>
  <div class="mt-4 flex items-center">
    <div class="flex-1 w-0">
      加载完成状态：
      <el-tag v-if="loaded" type="success">已完成</el-tag>
      <el-tag v-else type="danger">未完成</el-tag>
    </div>
    <div class="text-gray-500 text-xs text-right">
      总数：{{ result.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoad from 'magic-hooks/lib/useLoad'
import { ref, onMounted, readonly } from 'vue'

// const all = ref([])
const loading = ref(false)
const { query, result, loaded, load } = useLoad(async() => {
  await new Promise(r => {
    setTimeout(r, 2000)
  })
  const params = Object.entries(query).filter(([key, value]) => !!value).map(([key, value]) => `${key}=${value}`).join('&')
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`)
  const data: any[] = await res.json()
  return data
}, {
  initialQuery: {
    userId: null,
  },
  initialResult: [],
  loading,
})

onMounted(load)

</script>