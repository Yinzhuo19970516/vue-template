import request from '@/common/axios/request'
// 查询拉新活动规则
export function getInfoConfig(params) {
  return request.post('/h5/common/get_info_config', params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, slientError: true, loading: true })
}
