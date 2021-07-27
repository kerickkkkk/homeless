<template>
  <div
    ref="uploadImgModal"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <form @submit.prevent="fileUploadHandler">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              上傳圖片
            </h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="closeModal()"
            />
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input
                ref="file"
                type="file"
                name="file-to-upload"
                class="form-control"
                @change="fileHandler"
              >
            </div>
            <div>
              <img
                :src="preViewImgUrl"
                alt="預覽上傳圖片"
                class="img-fluid"
              >
            </div>
            <div class="d-flex justify-content-between">
              <p>上傳圖片後的連結</p>
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="copyImgUrl"
                >
                  複製取得連結
                </button>
              </div>
            </div>
            <div class="form-group">
              <input
                ref="uploadImgInput"
                v-model="imageUrl"
                type="text"
                class="form-control"
              >
            </div>
            <img
              :src="imageUrl"
              alt="預覽圖片"
              class="img-fluid"
            >
          </div>
          <div class="modal-footer">
            <input
              class="btn btn-sm btn-primary"
              type="submit"
              value="上傳圖片並取得連結"
            >
            <button
              type="button"
              class="btn  btn-sm btn-secondary"
              @click="closeModal()"
            >
              關閉
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
const reader = new FileReader()
export default {
  data () {
    return {
      uploadImgModal: null,
      preViewImgUrl: '',
      tempFile: null,
      imageUrl: ''
    }
  },
  mounted () {
    this.uploadImgModal = new Modal(this.$refs.uploadImgModal)
    reader.addEventListener('load', this.fileOnLoadHandler)
  },
  unmounted () {
    reader.removeEventListener('load', this.fileOnLoadHandler)
  },
  methods: {
    fileHandler () {
      this.tempFile = this.$refs.file.files[0]
      reader.readAsDataURL(this.$refs.file.files[0])
    },
    fileOnLoadHandler (e) {
      this.preViewImgUrl = e.target.result
    },
    fileUploadHandler () {
      if (!this.tempFile) {
        this.$swal('請先選擇檔案', '', 'error')
        return false
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload/`
      const formData = new FormData()
      formData.append('file-to-upload', this.tempFile)

      // action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data"
      // method="post"
      // 擺了反而過不了
      // const config = {
      //   headers: {
      //       'content-type': 'multipart/form-data'
      //     }
      // }
      // enctype="multipart/form-data"
      // this.$http.post(url,formData,config)
      this.$emitter.emit('fullScreenLoaidng', true)

      this.$http.post(url, formData)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.imageUrl = res.data.imageUrl
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        }).catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    copyImgUrl () {
      // 選擇該位子 並且複製
      this.$refs.uploadImgInput.select()
      document.execCommand('copy')
    },
    openModal () {
      this.uploadImgModal.show()
    },
    closeModal () {
      this.uploadImgModal.hide()
    }

  }
}
</script>
