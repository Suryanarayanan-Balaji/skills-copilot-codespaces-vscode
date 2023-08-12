function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/member.html',
    scope: {
      member: '=',
      skills: '='
    },
    controller: function($scope) {
      $scope.getSkill = function(skillId) {
        return $scope.skills[skillId];
      };
    }
  };
}