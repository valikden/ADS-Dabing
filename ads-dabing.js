(function () {
    'use strict';

    function addSettingsRow() {
        // Чекаємо відкриття налаштувань
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name === 'main') {
                // Перевіряємо чи вже додано
                if (!e.body.find('.ads-dabing-row').length) {
                    
                    var html = `
                        <div class="settings-param selector ads-dabing-row" data-type="button">
                            <div class="settings-param__name">ADS-Dabing</div>
                            <div class="settings-param__value">Працює</div>
                        </div>
                    `;

                    var $item = $(html);

                    $item.on('hover:enter', function () {
                        Lampa.Noty.show('Плагін ADS-Dabing активний!');
                    });

                    // Вставляємо в кінець списку налаштувань
                    e.body.find('.settings-param').last().after($item);

                    // Оновлюємо навіграцію пульта/клавіатури Lampa
                    if (window.Lampa && Lampa.Controller) {
                        Lampa.Controller.enable('settings_main');
                    }
                }
            }
        });
    }

    if (window.Lampa) {
        addSettingsRow();
    }
})();
