 export const formatFileSize = (sizeInBytes: number): string => {
  if (sizeInBytes >= 1048576) { // 1 MB = 1024 KB = 1048576 bytes
    return `${(sizeInBytes / 1048576).toFixed(2)} MB`;
  } else {
    return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  }
};
