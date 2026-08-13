(function () {
    'use strict';

    function startPlugin() {
        // Реєструємо новий параметр у налаштуваннях
        Lampa.SettingsApi.addParam({
            component: 'main', // Розділ налаштувань (головний)
            param: {
                name: 'ads_dabing_status',
                type: 'trigger', // Перемикач
                default: true
            },
            field: {
                name: 'ADS-Dabing',
                description: 'Плагін ADS-Dabing увімкнено'
            },
            onChange: function (value) {
                Lampa.Noty.show('ADS-Dabing: ' + (value ? 'Увімкнено' : 'Вимкнено'));
            }
        });
    }

    // Запускаємо плагін після завантаження Lampa
    if (window.Lampa && Lampa.SettingsApi) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') startPlugin();
        });
    }
})();
