<template>
    <div>
        <el-card class="box-card">
            <el-card>
                <div>
                    <h1 style="text-align: center; font-size: 30px; color: #063291;">上传文件内容</h1>
                </div>
                <el-table
                    :data="fileContent"
                    class="line"
                    style="width: 100%;">
                    <el-table-column
                        prop="name"
                        label="内容">
                    </el-table-column>
                    <el-table-column
                        prop="description"
                        label="描述">
                    </el-table-column>
                </el-table>

            </el-card>
            
            <el-divider></el-divider>

            <el-card>
                <div>
                    <h1 style="text-align: center; font-size: 30px; color: #063291;">聚类选择</h1>
                </div>
                <el-table
                    :data="tableData"
                    class="line"
                    style="width: 100%">
                    <el-table-column
                        prop="cluster"
                        label="聚类选择">
                    </el-table-column>
                    <el-table-column
                        prop="advantage"
                        label="优点">
                    </el-table-column>
                    <el-table-column
                        prop="disadvantage"
                        label="缺点">
                    </el-table-column>
                </el-table>
            </el-card>

            <el-divider></el-divider>
            
            <el-card>
                <div>
                    <h1 style="text-align: center; font-size: 30px; color: #063291;">参数选择</h1>
                </div>
                <el-table
                    :data="parameterData"
                    class="line"
                    style="width: 100%;">
                    <el-table-column
                        prop="name"
                        style="height:fit-content"
                        label="内容">
                    </el-table-column>
                    <el-table-column
                        prop="description"
                        label="描述">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: '1',
            fileContent: [
                {
                    'name': 'zip压缩包',
                    'description': '原有项目的zip压缩包，只允许zip格式'
                },
                {
                    'name': 'jar包',
                    'description': '原有项目经过打包的执行文件，微服务拆分需要从调用流程入手且因为运行环境可能存在差异，所以需要打包的执行文件'
                }
            ],
            tableData: [
                {
                    'cluster': 'Kmeans++聚类',
                    'advantage': '适用于绝大部分的单体应用，运行速度较快，结果准确',
                    'disadvantage': '可能会由于k的数值选取错误而导致识别结果偏差，需要使用者对项目拆分数量有清晰认知'
                },
                {
                    'cluster': 'MiniBatchKmeans聚类',
                    'advantage': '适用于大型单体应用，运行速度比Kmeans++聚类快',
                    'disadvantage': '由于是批量训练，损失值略大于Kmeans++聚类，收敛效果略差于Kmeans++聚类'
                },
                {
                    'cluster': 'ISODATA聚类',
                    'advantage': '能对聚类数量进行自适应伸缩的聚类，可以在K不太确定的时候进行使用',
                    'disadvantage': '速度很慢，超参数量多，数据波动范围较大'
                },
            ],
            parameterData: [
                {
                    'name': 'k',
                    'description': '微服务预计拆分数量，除了ISODATA之外，其余聚类产生的微服务数量与k一致'
                },
                {
                    'name': 'leastNum',
                    'description': '最小的拆分数量，仅用于ISODATA聚类，表示对微服务的下限估计'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.box-card {
    width: 100%;
}
.line {
    font-family: 'Arial';
    text-align: center;
}

</style>