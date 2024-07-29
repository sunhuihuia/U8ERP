import request from "@/utils/request";
/**
 * 上传文件
 *
 * @param file
 */
export function uploadFileApi(file) {
  const formData = new FormData();
  formData.append("file", file);
  return request({
    url: "/api/v1/files",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
/**
 * 删除文件
 *
 * @param filePath 文件完整路径
 */
export function deleteFileApi(filePath) {
  return request({
    url: "/api/v1/files",
    method: "delete",
    params: { filePath: filePath },
  });
}