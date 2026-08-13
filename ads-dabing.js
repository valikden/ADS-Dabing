(function () {
    'use strict';

    function init() {
        // 1. Створюємо окремий розділ у Налаштуваннях під назвою ADS-Dabing
        Lampa.SettingsApi.addComponent({
            component: 'ads_dabing',
            name: 'ADS-Dabing',
            icon: '<svg height="36" viewBox="0 0 24 24" width="36"><path d="0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/></svg>'
        });

        // 2. Додаємо в цей розділ сам рядок-перемикач
        Lampa.SettingsApi.addParam({
            component: 'ads_dabing',
            param: {
                name: 'ads_dabing_enabled',
                type: 'trigger',
                default: true
            },
            field: {
                name: 'ADS-Dabing',
                description: 'Статус роботи плагіна озвучки'
            },
            onChange: function (value) {
                Lampa.Noty.show('ADS-Dabing: ' + (value ? 'Увімкнено' : 'Вимкнено'));
            }
        });
    }

    // Чекаємо повної готовності додатка Lampa
    if (window.Lampa && Lampa.SettingsApi) {
        init();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') init();
        });
    }
})();
