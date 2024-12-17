<script setup lang="ts">
import FileInput, {
  type FileProps,
} from "~/components/atoms/FileInput/FileInput.vue";

interface FileInputProps {
  onChangeFile: (file: any) => void;
}

const props = defineProps<FileInputProps>();

import { ref } from "vue";

const imageSrc = ref("");

const handelFileUpload = (files: FileProps) => {
  const { file, source } = files;
  if (file) {
    imageSrc.value = source;
    props.onChangeFile(file);
  }
};

</script>

<template>
  <div>
    <FileInput :handel-file-upload="handelFileUpload" />
  </div>
</template>

