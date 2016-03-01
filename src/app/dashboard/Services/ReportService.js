module.exports = ['$localStorage','$http','$q',function($localStorage,$http,$q){
    this.getReport = function(){
        return $http({
            method: 'GET',
            url: 'http://zpower-intranet-beta-test/StatReport/GetHtmlPage?fileName=Printed_Door_Report'
        }).then(function(response){
            return response.data;
        },function(error){
            return error;
        });
    };
}];