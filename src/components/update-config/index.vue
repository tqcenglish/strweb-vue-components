<template>
  <div>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item v-for="(value, key) in dynamicValidateForm" :label="key" :key="key">
        <el-input  v-if="key !== 'enable' && key !== 'pausetime'" v-model="dynamicValidateForm[key]" :disabled="key == 'version'"></el-input>
        <el-switch v-if="key === 'enable' || key === 'pausetime'"
          v-model="dynamicValidateForm[key]"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      </el-form-item>
      <el-form-item>
        <span style="color:red;">提交保存后需要重启生效</span>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props:['pluginName',],
  data() {
    return {
      dynamicValidateForm: {}
    };
  },
  mounted() {
    // 获取插件配置信息
    this.$http
      .get(`/coocenter-api/plugins/plugin-config?name=${this.pluginName}`)
      .then(res => {
        this.dynamicValidateForm = res.data.data;
        Object.keys(this.dynamicValidateForm).forEach(key => {
          if  (typeof this.dynamicValidateForm[key] === "object") {
            delete this.dynamicValidateForm[key];
          }
        });
        this.$emit("pluginInfo", res.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    submitForm() {
      this.$http
        .post(`/coocenter-api/plugins/plugin-update-config`, {
          params: this.dynamicValidateForm,
          name: this.pluginName,
        })
        .then(() => {
          this.$message("更新成功");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
