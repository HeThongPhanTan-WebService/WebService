(function () {
  'use strict';

  angular
    .module('users.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  // Configuring the Users module
  function menuConfig(menuService) {
      menuService.addSubMenuItem('sidebar', 'admin', {
          title: 'Danh Sách Người Sử Dụng',
          state: 'admin.users',

      });
      // menuService.addMenuItem('sidebar', {
      //     title: 'Thông Tin Người Sử Dụng',
      //     state: 'user.list',
      //     roles: ['user']
      // });
  }
}());
