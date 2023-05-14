<template>
    <div>
        <br>
        <el-form ref="paraForm" :model="paraForm" :rules="rules" label-width="200px" size="big">
            <el-form-item label="输入模型聚类" prop="model">
                <el-select v-model="paraForm.model" placeholder="请选择模型使用聚类">
                    <el-option label="KMeans++聚类" value=0></el-option>
                    <el-option label="MiniBatchKMeans聚类" value=1></el-option>
                    <el-option label="ISODATA聚类" value=2></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="输入划分微服务数量" prop="k">
                <el-input v-model="paraForm.k" placeholder="输入微服务划分数量"></el-input>
            </el-form-item>
            <el-form-item label="输入最小划分数量" v-show="this.paraForm.model===`isodata`" prop="leastNum">
                <el-input v-model="paraForm.leastNum" placeholder="输入最小划分数量(ISODATA)"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        var validateModel = (rule, value, callback) => {
            if (value === '' || value === null) {
                callback(new Error('请选择模型聚类'));
            }
            callback();
        };
        var validateK = (rule, value, callback) => {
            let pattern = /^([0-9]|-)+([.]{1}[0-9]+){0,1}$/;
            if(value === '' || value === null) {
                callback(new Error('请输入K数量'))
            } else if(!pattern.test(value)) {
                callback(new Error('K必须是数字类型'))
            } else if(parseInt(value) <= 1 || parseInt(value) > 255) {
                callback(new Error('K在2-255之间'))
            }
            callback()
        };
        return {
            paraForm: {
                model: '',
                k: '',
                leastNum: '',
            },
            rules: {
                model: [
                    { validator: validateModel, trigger: 'blur' }
                ],
                k: [
                    { validator: validateK, trigger: 'blur' },
                ],
                leastNum: [
                    { validator: validateK, trigger: 'blur' },
                ]
            }
      };
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>

</style>