ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("yaMap", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758468, 37.601088],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            controls: ['zoomControl', 'geolocationControl'],
            zoom: 14
        });

        myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
          hintContent: 'Леонтьевский переулок, 5с1',
          balloonContent: 'Галерея'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/yandex-map-pointer.svg',
          // Размеры метки.
          iconImageSize: [20, 20],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });

      myMap.geoObjects
        .add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
    }
