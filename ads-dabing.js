(function () {
    'use strict';

    function addAdsDabing() {
        // Додаємо новий параметр через універсальний Listener Lampa
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name === 'main') {
                // Створюємо елемент рядка
                var item = $(`
                    <div class="settings-param selector" data-type="button">
                        <div class="settings-param__name">ADS-Dabing</div>
                        <div class="settings-param__value">Увімкнено</div>
                    </div>
                `);

                // Обробка натискання на рядок
                item.on('hover:enter', function () {
                    Lampa.Noty.show('Натиснуто ADS-Dabing');
                });

                // Вставляємо рядок у меню
                e.body.find('.settings-param').last().after(item);
            }
        });
    }

    // Слухаємо готовність додатка
    if (window.appready) {
        addAdsDabing();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                addAdsDabing();
            }
        });
    }
})();
