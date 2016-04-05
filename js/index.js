var NoteApp = angular.module("NoteApp", []);

var NoteCtrl = function ($scope) {
    $scope.notes = [];
    $scope.noteTitle = "";
    $scope.noteText = "";
    $scope.errMsg = "";

    $scope.note = {
        noteTitle: "",
        noteText: ""
    }

    $scope.addNote = function () {
        if ($scope.noteTitle.length == 0|| $scope.noteText.length == 0) {
            $scope.errMsg = "Fields cannot be blank";
        }
        else {
            $scope.note = {
                noteTitle: $scope.noteTitle,
                noteText: $scope.noteText
            }
            $scope.notes.push($scope.note);
            $scope.noteTitle = "";
            $scope.noteText = "";
            $scope.errMsg = "";
        }
    }

    $scope.removeNote = function (n) {
        var index = $scope.notes.indexOf(n);
        $scope.notes.splice(index, 1);
    }

}

var NoteCtrl = NoteApp.controller("NoteCtrl", ["$scope", NoteCtrl]);