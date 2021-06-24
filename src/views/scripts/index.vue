<template>
    <div>
        <el-form ref="searchForm" :inline="true" :model="scriptVO" style="margin-top: 20px">
            <!-- 重置会看 el-form-item 组件元素的 prop 上是否指定了字段名，指定了才会重置生效 -->
            <el-form-item prop="name">
                <!--prop需要在data里指定，不指定会出现重置不了的问题， placeholder背景文案 -->
                <el-input v-model="scriptVO.name" placeholder="脚本名称" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="fetchData">查询</el-button>
                <!-- searchForm 为搜索框上面 ref 绑定的属性,resetForm 要在methods里面定义-->
                <el-button @click="resetForm('searchForm')">重置</el-button>
                <el-button type="primary" @click="handleAdd">新增</el-button>
            </el-form-item>
        </el-form>
        <!-- 搜索框结束 -->

        <el-table :data="scriptlist" height="380" border style="width: 100%">
            <!-- type='index'获取索引值，从1开始，label显示的标题，prop接口返回数据的字段名，width列宽，不写就自动 -->
            <el-table-column type="name" label="脚本名称" width="100"></el-table-column>
            <el-table-column prop="type" label="类型" width="120"></el-table-column>
            <el-table-column prop="content" label="脚本内容" width="100"></el-table-column>

            <!-- 操作开始，scope 可以获取行数据 ，scope.row.id 获取该行数据的 id值-->
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button size="mini" >编辑</el-button>
                    <!-- 根据后端返回该行的id进行编辑和删除 -->
                    <el-button size="mini" type="danger"  >删除</el-button>
                </template>
            </el-table-column>
            <!-- 操作结束 -->

        </el-table>
        <!-- 列表页面结束 -->
        <!-- 分页 -->
        <!--
            handleSizeChange 改变每页多少条调用这个方法，会传选择的条数过去
            handleCurrentChange 点击页码调用这个方法，会传点击的页码过去
             current-page当前的页码，data里定义的1，默认第一页
             page-sizes 选择项，每页显示多少条
             page-size 每页显示多少条，data里定义
             layout="total, sizes, prev, pager, next, jumper"
             total 总共多少条，去掉后不显示，sizes选择项，prev上一页的箭头，pager页码，next下一页的箭头，jumper前往多少页
           -->
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 15, 20, 30]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
        ></el-pagination>
        <!-- 分页结束 -->

    </div>
</template>

<script>
    import scriptApi from "@/api/scripts"
export default {
    data() {
        return {
            scriptlist: [],  // 数据传给list
            total: 0,
            currentPage: 1, // 当前页码
            pageSize: 10, // 每页显示的数据条数
            scriptVO: {
                name: '',
                content: '',
            },
        };
    },
    created() {

        // 调接口请求数据，将调接口定义一个方法，在created里调用这个方法
        this.fetchData()
    },
    methods: {
        fetchData() {
            // this.pageSize,this.currenPage 分页的条数和页码，要this.
            scriptApi.getscriptList(this.pageSize, this.currentPage, this.scriptVO).then(response => {
                const res = response.data
                this.scriptslist = res.data.records  // 将返回数据的data赋值给list
                this.total = res.data.total  // 将接口返回的total 覆盖 data里的total
                console.log(res)
            })


        },
        // 重置功能,element ui 提供的功能
        resetForm(formName) {
            // 重置要看 el-form-item 组件元素的 prop 上是否指定了字段名，指定了才会重置生效
            this.$refs[formName].resetFields();
        },
    }
}


</script>
