<!--
 * @Author: liujiang
 * @Date: 2022-12-05 12:03:40
 * @LastEditors: liujiang liujiang@youzhicai.com
 * @LastEditTime: 2023-04-20 15:16:33
 * @Description:
-->
<template>
  <div class="rich-text">
    <editor
      v-if="editorVisible"
      :id="id"
      v-model="content"
      :init="editorOption"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/icons/default/icons'
import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/themes/silver/theme'
// import 'tinymce/plugins/image';
// import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/link'
import 'tinymce/plugins/anchor'

import 'tinymce/plugins/charmap'
// import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/print'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/searchreplace'
// import 'tinymce/plugins/fullscreen';
import './plugins/fullscreen'
// import 'tinymce/plugins/formatpainter';
import './plugins/formatpainter'

export default {
  name: 'URichEditor',
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: 'tinymce-wrap',
    }
  },
  data() {
    const language_url = this.$UBase.language_url;
    if (!language_url) {
      throw new Error('URichEditor: $UBase.language_url is required')
    }
    return {
      editorVisible: false,
      editorOption: {
        inline: location.href.includes('isPdf=1') || location.href.includes('isPrint=1'),
        language_url, // 指定中文包
        language: 'zh-Hans', // 中文
        height: 500, // 高度
        browser_spellcheck: true, // 拼写检查
        branding: false, // 去水印
        elementpath: false, // 禁用编辑器底部的状态栏
        statusbar: false, // 隐藏编辑器底部的状态栏
        paste_data_images: false, // 允许粘贴图像
        menubar: false, // 隐藏最上方menu
        // 避免地址变成相对路径
        relative_urls: false,
        remove_script_host: false,
        convert_urls: false,
        font_formats:
          '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
        plugins:
          'lists table  wordcount link anchor charmap insertdatetime print preview fullscreen formatpainter hr searchreplace',
        toolbar: [
          'undo redo | forecolor backcolor | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | formatselect fontselect fontsizeselect | formatpainter',
          'removeformat blockquote subscript superscript | numlist bullist hr table| link image media charmap anchor pagebreak codesample searchreplace | ltr rtl | print preview fullscreen',
        ],
        setup: (editor) => {
          editor.on('init', function(e) {
            // this.getBody().style.fontSize = '16px';
            // this.getBody().style.color = '#000';
            // this.getBody().style.fontFamily = '宋体';
            editor.editorContainer?.classList.add('el-input__inner')
          });
        },
      },
    }
  },
  computed: {
    content: {
      set(value) {
        this.$emit('input', value)
      },
      get() {
        return this.value || ''
      },
    },
  },
  created() {
    let timerId = null
    this.setVisible = (visible) => {
      if (timerId) clearTimeout(timerId)
      timerId = setTimeout(() => {
        this.editorVisible = visible
      }, 500)
    }
  },
  mounted() {
    this.setVisible(true)
  },
  activated() {
    this.setVisible(true)
  },
  deactivated() {
    this.setVisible(false)
  },
}
</script>

<style lang="less" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.rich-text {
  ::v-deep .tox-tinymce {
    animation-name: fadeIn;
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    &.el-input__inner {
      padding: 0;
    }
  }

  // 修复为默认样式
  color: #353535;

  ::v-deep {
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
  }
}
</style>
