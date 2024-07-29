import request from "@/utils/request";
/**
 * 字典类型分页列表
 *
 * @param queryParams
 */
export function getDictTypePage(queryParams) {
  return request({
    url: "/api/v1/dict/types/page",
    method: "get",
    params: queryParams,
  });
}
/**
 * 字典类型表单数据
 *
 * @param id
 */
export function getDictTypeForm(id) {
  return request({
    url: "/api/v1/dict/types/" + id + "/form",
    method: "get",
  });
}
/**
 * 新增字典类型
 *
 * @param data
 */
export function addDictType(data) {
  return request({
    url: "/api/v1/dict/types",
    method: "post",
    data: data,
  });
}
/**
 * 修改字典类型
 *
 * @param id
 * @param data
 */
export function updateDictType(id, data) {
  return request({
    url: "/api/v1/dict/types/" + id,
    method: "put",
    data: data,
  });
}
/**
 * 删除字典类型
 */
export function deleteDictTypes(ids) {
  return request({
    url: "/api/v1/dict/types/" + ids,
    method: "delete",
  });
}
/**
 * 获取字典类型的数据项
 *
 * @param typeCode 字典类型编码
 */
export function getDictOptions(typeCode) {
  return request({
    url: "/api/v1/dict/" + typeCode + "/options",
    method: "get",
  });
}
/**
 * 字典分页列表
 */
export function getDictPage(queryParams) {
  return request({
    url: "/api/v1/dict/page",
    method: "get",
    params: queryParams,
  });
}
/**
 * 获取字典表单数据
 *
 * @param id
 */
export function getDictFormData(id) {
  return request({
    url: "/api/v1/dict/" + id + "/form",
    method: "get",
  });
}
/**
 * 新增字典
 *
 * @param data
 */
export function addDict(data) {
  return request({
    url: "/api/v1/dict",
    method: "post",
    data: data,
  });
}
/**
 * 修改字典项
 *
 * @param id
 * @param data
 */
export function updateDict(id, data) {
  return request({
    url: "/api/v1/dict/" + id,
    method: "put",
    data: data,
  });
}
/**
 * 删除字典
 *
 * @param ids 字典项ID，多个以英文逗号(,)分割
 */
export function deleteDict(ids) {
  return request({
    url: "/api/v1/dict/" + ids,
    method: "delete",
  });
}
