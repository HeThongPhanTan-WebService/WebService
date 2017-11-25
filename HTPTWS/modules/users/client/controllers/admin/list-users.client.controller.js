(function () {
  'use strict';

  angular
    .module('users.admin')
    .controller('UserListController', UserListController);

  UserListController.$inject = ['$scope', '$filter', 'AdminService','PagerService', 'Authentication'];

  function UserListController($scope, $filter, AdminService, PagerService, Authentication) {
      var vm = this;
      vm.pager = {};
      vm.setPage = setPage;
      vm.roles = Authentication.user.roles[0] === 'admin';
      AdminService.query(function (data) {
          vm.users = data;
          vm.dummyItems = _.range(0, vm.users.length);
          initController();
      });

      function initController() {
          vm.setPage(1);
      }

      function setPage(page) {
          if (page < 1 || page > vm.pager.totalPages) {
              return;
          }
          vm.pager = PagerService.getPager(vm.dummyItems.length, page);
          vm.items = vm.users.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
          console.log(this.pager, this.items);
      }

        // vm.buildPager = buildPager;
        // vm.figureOutItemsToDisplay = figureOutItemsToDisplay;
        // vm.pageChanged = pageChanged;
        //
        // AdminService.query(function (data) {
        //   vm.users = data;
        //   vm.buildPager();
        // });
        //
        // function buildPager() {
        //   vm.pagedItems = [];
        //   vm.itemsPerPage = 15;
        //   vm.currentPage = 1;
        //   vm.figureOutItemsToDisplay();
        // }
        //
        // function figureOutItemsToDisplay() {
        //   vm.filteredItems = $filter('filter')(vm.users, {
        //     $: vm.search
        //   });
        //   vm.filterLength = vm.filteredItems.length;
        //   var begin = ((vm.currentPage - 1) * vm.itemsPerPage);
        //   var end = begin + vm.itemsPerPage;
        //
        //   vm.pagedItems = vm.filteredItems.slice(begin, end);
        // }
        //
        // function pageChanged() {
        //   vm.figureOutItemsToDisplay();
        // }

  }
}());
