(function () {
    'use strict';

    function init() {
        // Чекаємо відкриття меню налаштувань
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name === 'main') { // Головна сторінка налаштувань
                
                // Перевіряємо, щоб не додати дублікат при повторному відкритті
                if (e.body.find('.ads-dabing-item').length === 0) {
                    
                    var item = $(`
                        <div class="settings-param selector ads-dabing-item" data-type="button">
                            <div class="settings-param__name">ADS-Dabing</div>
                            <div class="settings-param__value">Увімкнено</div>
                        </div>
                    `);

                    // Реакція на натискання
                    item.on('hover:enter', function () {
                        Lampa.Noty.show('Ви натиснули на ADS-Dabing');
                    });

                    // Вставляємо в кінець списку налаштувань
                    e.body.find('.settings-param').last().after(item);
                }
            }
        });
    }

    // Якщо Lampa вже завантажена — запускаємо одразу, якщо ні — чекаємо готовності
    if (window.Lampa && Lampa.Settings) {
        init();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') init();
        });
    }
})();
