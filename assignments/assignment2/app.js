
(function() {
    'use strict';
    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var tbc = this;
        tbc.items = ShoppingListCheckOffService.getItemsToBuy();

        tbc.removeItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };

        tbc.isListEmpty = function () {
            return ShoppingListCheckOffService.allBought();
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var abc = this;
        abc.items = ShoppingListCheckOffService.getItemsAlreadyBought();

        abc.isListEmpty = function () {
          return ShoppingListCheckOffService.nothingBought();
        };
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var itemsToBuy = [
            {
                name: 'cookies',
                quantity: 10
            },
            {
                name: 'potatoes',
                quantity: 5
            },
            {
                name: 'tomatoes',
                quantity: 6
            },
            {
                name: 'eggs',
                quantity: 12
            },
            {
                name: 'apples',
                quantity: 4
            },
            {
                name: 'avocado',
                quantity: 1
            }
        ];
        var itemsAlreadyBought = [];

        service.buyItem = function (itemIndex) {
            var itemBought = itemsToBuy[itemIndex];
            itemsAlreadyBought.push(itemBought);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsAlreadyBought = function () {
            return itemsAlreadyBought;
        };

        service.allBought = function () {
            return (itemsToBuy.length == 0);
        };
        service.nothingBought = function () {
            return (itemsAlreadyBought.length == 0);
        };
    }
})();