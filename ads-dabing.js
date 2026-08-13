(function () {
    'use strict';

    function initPlugin() {
        // 1. Додаємо новий розділ меню в Налаштування
        Lampa.SettingsApi.addComponent({
            component: 'ads_dabing',
            name: 'ADS-Dabing',
            icon: '<svg height="36" viewBox="0 0 24 24" width="36"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/></svg>'
        });

        // 2. Додаємо перемикач у цей розділ
        Lampa.SettingsApi.addParam({
            component: 'ads_dabing',
            param: {
                name: 'ads_dabing_enabled',
                type: 'trigger',
                default: true
            },
            field: {
                name: 'Статус плагіна',
                description: 'Увімкнути або вимкнути озвучку ADS-Dabing'
            },
            onChange: function (value) {
                Lampa.Noty.show('ADS-Dabing: ' + (value ? 'Увімкнено' : 'Вимкнено'));
            }
        });
    }

    // Запуск плагіна
    if (window.Lampa && Lampa.SettingsApi) {
        initPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') initPlugin();
        });
    }
})();
