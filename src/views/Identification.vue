<template>
    <div>
        <h2 style="text-align: center; font-size: 30px;">Monolithic Application Identification</h2>
        <el-card class="box-card">
            <el-steps :active=active>
                <el-step title="上传程序" icon="el-icon-upload">
                </el-step>
                <el-step title="选择参数" icon="el-icon-edit">
                </el-step>
                <el-step title="等待结果" icon="el-icon-picture">
                </el-step>
            </el-steps>
            <Upload v-show="active===1" ref="upload"></Upload>
            <ParameterSetting v-show="active===2" ref="parameter"></ParameterSetting>
            <RelationGraph v-show="active===3" ref="result"></RelationGraph>
            <div>
                <el-button style="margin-top: 12px;" @click="prev" type="info" v-if="this.active === 2">上一步</el-button>
                <el-button style="margin-top: 12px;" @click="next" type="info" v-if="this.active === 1">下一步</el-button>
                <el-button style="margin-top: 12px;" @click="submit" type="primary" v-if="this.active === 2">提交表单</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import Upload from '@/components/Upload.vue'
import ParameterSetting from '@/components/ParameterSetting.vue'
import RelationGraph from '@/components/RelationGraph.vue'

export default {
    data() {
        return {
            active: 3,
        }
    },
    components: {
        Upload,
        ParameterSetting,
        RelationGraph
    },
    methods: {
        prev() {
            if(this.active === 2) {
                this.active--
            } else {
                alert("编号错误")
            }
        },
        next() {
            if(this.active === 1) {
                let form = this.$refs.upload.form
                if(form.JavaList.length !== 0 && form.JarList.length !== 0 && form.name.length >= 3 && form.name.length <= 20) {
                    this.active++;
                } else {
                    this.$message.warning("输入内容不符合要求")
                }
            } else if(this.active === 2) {
                this.active++
            }else {
                alert("编号错误")
            }
        },
        async submit() {
            // let data = new FormData()
            // data.append('name', this.$refs.upload.form.name)
            // data.append('zip', this.$refs.upload.form.JavaList[0])
            // data.append('jar', this.$refs.upload.form.JarList[0])
            // data.append('type', this.$refs.parameter.paraForm.model)
            // data.append('k', this.$refs.parameter.paraForm.k)
            // data.append('leastNum', this.$refs.parameter.paraForm.leastNum)

            let data = {
                'name': this.$refs.upload.form.name,
                'zip': this.$refs.upload.form.JavaList[0],
                'jar': this.$refs.upload.form.JarList[0],
                'type': this.$refs.parameter.paraForm.model,
                'k': this.$refs.parameter.paraForm.k,
                'leastNum': this.$refs.parameter.paraForm.leastNum,
            }
            console.log(data)

            let header = {
                "Access-Control-Allow-Origin": "http://124.220.17.130",
                "Access-Control-Allow-Methods": ["POST", "PUT", "PATCH", "GET", "DELETE", "OPTIONS"],
                "Access-Control-Allow-Headers": ["Origin", "X-Api-Key", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
            }

            await this.$http({
                method: 'post',
                url: '/identification',
                data: data
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });
            
        },
    }
}
</script>

<style scoped>

</style>