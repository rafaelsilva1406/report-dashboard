module.exports = ['$rootScope','$scope','ReportService',function($rootScope,$scope,ReportService){
    var base = '/';
    $scope.slides = [
        {
            id:0,
            src:base+'Printed_Door_Report_Printed_Door_Scrap_Percentage_by_Lot0001.png',
            text:'Printed_Door_Report_Printed_Door_Scrap_Percentage_by_Lot0001'
        },
        {
            id:1,
            src:base+'Printed_Door_Report_Printed_Door_Yield_Percentage_by_Lot0002.png',
            text:'Printed_Door_Report_Printed_Door_Yield_Percentage_by_Lot0002'
        },
        {
            id:2,
            src:base+'Printed_Door_Report_Printed_Door_Running_Yield__by_Date0003.png',
            text:'Printed_Door_Report_Printed_Door_Running_Yield__by_Date0003'
        }
    ];
}];