angular.module('statisticsPc').service('httpService', ['$http', function ($http) {
  // 获取问卷/考核内容
  this.getQuestionnaireDetail = function (id) {
    return $http.get('/api/questionnaire/' + id);
  }
  // 修改获取问卷/考核截止时间
  this.editQuestionnaireEndAt = function (param, id) {
    return $http.put('/api/questionnaire/' + id, param);
  }
  // 提交问卷/考核内容
  this.postQuestionnaire = function (object) {
    return $http.post('/api/questionnaire/answer', object);
  }
  // 获取问卷/考核结果详情
  this.getQuestionnaireResult = function (id, userId) {
    return $http.get('/api/questionnaire/' + id + '/result/questionnaire/?userId=' + (userId ? userId : ''));
  }
  // 获取问卷/考核统计
  this.getQuestionnaireStatistics = function (id, param) {
    return $http.get('/api/questionnaire/' + id + '/result/list/?offset=' + param.offset + '&limit=' + param.limit);
  }
 
  // 查看问卷/考核时清未读数
  this.clearQuestionnaireunread = function () {
    return $http.put('/api/questionnaire/clear/unread');
  }

}])
