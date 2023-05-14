<template>
    <div>
        <br>
        <el-form ref="form" :model="form" :rules="rules" label-width="150px" label-position="right">
            <el-form-item label="输入Java程序名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="上传Java程序压缩包" v-model="form.JavaList">
                <el-upload
                    class="upload-zip"
                    action="#"
                    :limit="1"
                    :auto-upload="false"
                    :show-file-list="true"
                    :file-list="this.form.JavaList"
                    :before-upload="beforeZipUpload"
                    :on-exceed="handleExceedZip"
                    :on-change="handleZipChange"
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">上传zip/rar文件, 且不超过500MB</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="上传Jar包">
                <el-upload
                    class="upload-jar"
                    action="#"
                    :limit="1"
                    :auto-upload="false"
                    :show-file-list="true"
                    :file-list="this.form.JarList"
                    :before-upload="beforeJarUpload"
                    :on-exceed="handleExceedJar"
                    :on-change="handleJarChange"
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">上传jar文件, 且不超过500MB</div>
                </el-upload>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
            name: '',
            JavaList: [],
            JarList: [],
        },
        rules: {
            name: [
                { required: true, message: '请输入Java应用程序名称', trigger: 'blur' },
                { min: 3, max: 20, message: '长度在3到20个字符', trigger: 'blur' }
            ],
        }
      }
    },
    methods: {
        beforeZipUpload(file) {
            let index = file.name.lastIndexOf('.')
            let suffix = file.name.substring(index+1).toLowerCase()
            const type = (suffix === 'zip' || suffix === 'rar')
            const size = file.size / 1024 / 1024 < 500 // 500M
            console.log(suffix, file.name)
            
            if(!type) {
                this.$message.error('上传文件只能是 zip 或 rar 格式!');
            } else if(!size) {
                this.$message.error('上传文件大小必须小于500M');
            }
            return type && size
        },
        handleExceedZip(files, fileList) {
            this.$message.warning(`只能上传一个压缩包, 本次上传了${files.length}个文件, 总共${files.length + fileList.length}`)
        },
        handleZipChange(file, fileList) {
            this.form.JavaList = fileList
            console.log(this.form.JarList, this.form.JavaList)

        },
        beforeJarUpload(file) {
            let index = file.name.lastIndexOf('.')
            let suffix = file.name.substring(index+1).toLowerCase()
            const type = suffix === 'jar'
            const size = file.size / 1024 / 1024 < 500 // 500M
            
            if(!type) {
                this.$message.error('上传文件只能是 jar 格式!');
            } else if(!size) {
                this.$message.error('上传文件大小必须小于500M');
            }
            return type && size
        },
        handleExceedJar(files, fileList) {
            this.$message.warning(`只能上传一个Jar包, 本次上传了${files.length}个文件, 总共${files.length + fileList.length}`)
        },
        handleJarChange(file, fileList) {
            this.form.JarList = fileList
            console.log(this.form.JarList, this.form.JavaList)
        },
    }
}
</script>

<style lang="less" scoped>

</style>