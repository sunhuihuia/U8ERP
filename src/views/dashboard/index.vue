<!-- 首页 -->
<template>
  <div class="home-model">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="Date" sortable width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="Operations" style="float: right">
        <template #default="scope">
          <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
interface User {
  date: string;
  name: string;
  address: string;
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const handleEdit = (index, value) => {
  console.log(index, value);
};
</script>

<style lang;="scss" scoped>
.home-model {
  padding: 35px;
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
