function AppCtrl($scope, $http){

    $http.get('/api/contacts')
        .then(function(response) {
            $scope.contactList = response.data;
        })
        .catch(function(error) {
            console.error("Error" + error);
        });

    person1 = {
        name: "Mihir",
        email: "email1@gmail.com",
        number: "(123)-123456"
    };
    person2 = {
        name: "Prutha",
        email: "email2@gmail.com",
        number: "(213)-123456"
    };
    person3 = {
        name: "Dhruv",
        email: "email3@gmail.com",
        number: "(312)-123456"
    };
    var contactList = [person1, person2, person3];
    $scope.contactList = contactList;
}