import request from '@/common/axios/request'
// 查询拉新活动规则
export function queryInviteActivityRule(params) {
  return request.post('/todos/1', params, { slientError: true, loading: true })
}
