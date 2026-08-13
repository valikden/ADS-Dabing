(function () {
    'use strict';

    function addAdsDabingSetting() {
        // Чекаємо, поки додаток Lampa повністю завантажиться
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                
                // Додаємо новий пункт у компонент налаштувань (Settings)
                Lampa.Settings.listener.follow('open', function (e) {
                    if (e.name === 'main') { // Головне меню налаштувань
                        
                        // Створюємо елемент кнопки/рядка
                        var item = $(`
                            <div class="settings-param selector" data-type="button">
                                <div class="settings-param__name">ADS-Dabing</div>
                                <div class="settings-param__value">Увімкнено</div>
                            </div>
                        `);

                        // Додаємо обробник кліку на цей рядок
                        item.on('hover:enter', function () {
                            Lampa.Noty.show('Ви натиснули на ADS-Dabing');
                        });

                        // Вставляємо новий рядок у кінець списку налаштувань
                        e.body.find('.settings-param').last().after(item);
                    }
                });

            }
        });
    }

    // Запуск плагіна
    if (window.Lampa) {
        addAdsDabingSetting();
    }
})();
