<script setup lang="ts">
import type { MessageSchema } from '@/types'
import UploadIcon from '~icons/ic/outline-cloud-upload'

export interface Props {
  accept?: string
}

const props = withDefaults(defineProps<Props>(), {
  accept: 'image/*'
})

const { t } = useI18n<{ message: MessageSchema }>({ useScope: 'global' })

// const message = useMessage()

const customRequest = ({ file, onFinish, onError, onProgress }: UploadCustomRequestOptions) => {
  console.log('file', file)
  console.log('onFinish', onFinish)
  console.log('onError', onError)
  console.log('onProgress', onProgress)

  const formData = new FormData()
  // if (data) {
  //   Object.keys(data).forEach((key) => {
  //     formData.append(key, data[key as keyof UploadCustomRequestOptions['data']])
  //   })
  // }

  formData.append('file', file.file as File)

  UploadAPI.uploadFile(formData, {
    onUploadProgress: (_progressEvent) => {
      // ;({ percent: Math.ceil((progressEvent.loaded / progressEvent.total) * 100) })
    }
  })
    .then((res) => {
      onFinish()
      console.log(res)
    })
    .catch((err) => {
      onError()
      console.log(err)
    })
}
</script>

<template>
  <NUpload
    :accept="props.accept"
    :custom-request="customRequest"
    :default-upload="false"
    directory-dnd
  >
    <NUploadDragger>
      <div class="mb-3">
        <NIcon
          size="48"
          :depth="3"
        >
          <UploadIcon />
        </NIcon>
      </div>
      <NText>{{ t('点击或者拖动文件到该区域来上传') }}</NText>
      <NP
        depth="3"
        class="mt-2"
      >
        {{ t(' 请不要上传敏感数据') }}
      </NP>
    </NUploadDragger>
  </NUpload>
</template>
