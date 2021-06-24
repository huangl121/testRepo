<template>  <!-- 使用element的导航菜单 -->
    <div class="navbar">
        <!--default-active默认选中的菜单，选中后颜色是 active-text-color  -->
        <!--  :router='true',true表示开启路由模式，开启之后，index值代表的就是路由地址-->
        <!--  :router='true'开启之后点击就会跳转到对应的路由，默认为false -->
        <!-- text-color 文字的颜色 -->
        <el-menu :router='true' default-active="/home" class="el-menu-vertical-demo" background-color="#545c64"
                 text-color="#fff" active-text-color="#ffd04b">

            <!-- 首页  class就是对应的icon -->
            <el-menu-item index="/home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <!-- 会员管理 index下的左右 / 别忘记-->
            <el-menu-item index="/dsconfig/">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">数据源管理</span>
            </el-menu-item>

            <!-- 供应商管理 -->
            <el-menu-item index="/scripts/">
                <i class="el-icon-menu"></i>
                <span slot="title">脚本管理</span>
            </el-menu-item>

            <!-- 商品管理 -->
            <el-menu-item index="/job/">
                <i class="el-icon-suitcase-1"></i>
                <span slot="title">任务管理</span>
            </el-menu-item>

            <!-- 员工管理 -->
            <el-menu-item index="/backup/">
                <i class="el-icon-cpu"></i>
                <span slot="title">灾备管理</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>


<style scoped>
    /* 去掉右边框 */
    .el-menu {
        border-right: none;
    }
</style>
