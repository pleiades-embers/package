<template>
  <el-upload
    :file-list="images"
    list-type="picture-card"
    :drag="true"
    :before-upload="beforeUpload"
    :http-request="uploadHttp"
  >
    <i class="el-icon-plus"></i>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="" />
  </el-dialog>
  <img width="100%" src="http://guokai1.oss-cn-beijing.aliyuncs.com/ALIOSS_IMG_/1610773649000" alt="" />
</template>

<script lang="ts">
import ossClient from "../util/aliyun.oss.client";
import { defineComponent, ref, reactive, getCurrentInstance } from "vue";

interface aliyunType {
  Region: string;
  AccessKeyId: string;
  AccessKeySecret: string;
  Bucket: string;
  SecurityToken: string;
}

export default defineComponent({
  name: "Upload",
  setup(props) {
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const images = ref([]); //上传文件列表

    const instance = getCurrentInstance(); // 获取上下文，类似原来的this
    const message = instance!.appContext.config.globalProperties.$message; //反向断言

    const uploadConf={
      region: "",
      accessKeyId: "",
      accessKeySecret: "",
      bucket: "",
      stsToken: "",
    }

    const init = () => {
      //获取阿里云token  这里是后台返回来的数据
      const aliyun: aliyunType = {
        Region: "oss-cn-beijing",
        AccessKeyId: "LTAIBjmYtbHpZRrE",
        AccessKeySecret: "IWRalXOn92uq484FjmYxdzRO61DIQM",
        Bucket: "guokai1",
        SecurityToken: "",
      };
      const {
        Region,
        AccessKeyId,
        AccessKeySecret,
        Bucket,
        SecurityToken,
      } = aliyun;
      uploadConf.region = Region;
      uploadConf.accessKeyId = AccessKeyId;
      uploadConf.accessKeySecret = AccessKeySecret;
      uploadConf.bucket = Bucket;
      uploadConf.stsToken = SecurityToken;
    };

    /**
     * 阿里云OSS上传
     */
    const uploadHttp = ({ file }) => {
      const imgName  = "ALIOSS_IMG_";
      const fileName = `${imgName}/${Date.parse(new Date() as any)}`; //定义唯一的文件名
      init()  //初始化阿里oss
      console.log(fileName)
      console.log(uploadConf)
      ossClient(uploadConf).put(fileName, file, {
          'ContentType': 'image/jpeg'
      }).then(({res, url, name}) => {
          if (res && res.status == 200) {
              console.log(`阿里云OSS上传图片成功回调`, res, url, name);
          }
      }).catch((err) => {
          console.log(`阿里云OSS上传图片失败回调`, err);
      });
    };

    /**
     * 图片限制
     */
    const beforeUpload = (file) => {
      const isJPEG = file.name.split(".")[1] === "jpeg";
      const isJPG = file.name.split(".")[1] === "jpg";
      const isPNG = file.name.split(".")[1] === "png";
      const isLt500K = file.size / 1024 / 500 < 2;
      if (!isJPG && !isJPEG && !isPNG) {
        // https://github.com/vueComponent/ant-design-vue/issues/2810
        message.error("上传图片只能是 JPEG/JPG/PNG 格式!");
      }
      if (!isLt500K) {
        message.error("单张图片大小不能超过 500KB!");
      }
      return (isJPEG || isJPG || isPNG) && isLt500K;
    };

    return {
      dialogImageUrl,
      beforeUpload,
      uploadHttp
    };
  },
});
</script>

<style scoped lang="scss"></style>
