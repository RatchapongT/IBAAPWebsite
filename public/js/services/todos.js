angular.module('todoService', [])

    // super simple service
    // each function returns a promise object
    .factory('Todos', ['$http', function ($http) {
        return {
            get: function (recordDate) {

                return $http.get('/api/todos/' + recordDate);
            },
            create: function (todoData, recordDate) {
                console.log(recordDate)
                return $http.post('/api/todos/' + recordDate, todoData);
            },
            delete: function (id, recordDate) {
                return $http.delete('/api/todos/' + recordDate + '/' + id);
            }
        }
    }]);