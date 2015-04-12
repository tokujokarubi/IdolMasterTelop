function startIdolMasterTelop() {

    var circleInfoList = [
        {x: 360, y: 28, r: 15, colorName: 'aqua'  },
        {x: 18,  y: 56, r: 16, colorName: 'purple'},
        {x: 122, y: 86, r: 27, colorName: 'aqua'  },
        {x: 152, y: 62, r: 30, colorName: 'orange'},
        {x: 210, y: 28, r: 22, colorName: 'orange'},
        {x: 264, y: 60, r: 26, colorName: 'purple'},
        {x: 307, y: 89, r: 21, colorName: 'aqua'  },
        {x: 321, y: 50, r: 42, colorName: 'green' },
        {x: 374, y: 95, r: 14, colorName: 'purple'},
        {x: 382, y: 54, r: 20, colorName: 'orange'},
        {x: 409, y: 41, r: 11, colorName: 'purple'},
        {x: 223, y: 74, r: 43, colorName: 'aqua'  },
        {x: 181, y: 80, r: 21, colorName: 'purple'},
        {x: 113, y: 58, r: 36, colorName: 'purple'},
        {x: 55,  y: 30, r: 18, colorName: 'aqua'  },
        {x: 72,  y: 68, r: 24, colorName: 'green' },
        {x: 100, y: 30, r: 28, colorName: 'yellow'}
    ];

    var colorLookUpTable = {
        aqua:   '#23C9DD',
        yellow: '#F5FB0F',
        green:  '#C3E434',
        orange: '#EA9709',
        purple: '#D5007E'
    };

    function createSvgElement(qualifiedName, attributes) {

        var svgElement = document.createElementNS('http://www.w3.org/2000/svg', qualifiedName);

        if (attributes) {

            for (var key in attributes) {

                svgElement.setAttribute(key, attributes[key]);
            }
        }

        return svgElement;
    }

    function createBgLayer() {

        var svgElement = createSvgElement('svg', {
            'id': 'idol_master_bg_layer',
            'width': '420',
            'height': '120'
        });

        for (var i = 0; i < circleInfoList.length; ++i) {

            var circleInfo = circleInfoList[i];

            var beginSeconds = (Math.random() * 0.3).toFixed(1) + 's';
            var duringSeconds = (1 + Math.random() * 0.3).toFixed(1) + 's';

            var animateTransformElement = createSvgElement('animateTransform', {
                'attributeName': 'transform',
                'attributeType': 'XML',
                'type': 'scale',
                'begin': beginSeconds,
                'dur': duringSeconds,
                'repeatCount': '1',
                'values': '0 0; 1 1; 0.5 0.5; 1 1; 0.75 0.75; 1 1; 0.875 0.875; 1 1; 0.9375 0.9375; 1 1',
                'fill': 'freeze'
            });

            var circleElement = createSvgElement('circle', {
                'cx': '0',
                'cy': '0',
                'r': circleInfo.r + '',
                'transform': 'scale(0 0)',
                'fill': colorLookUpTable[circleInfo.colorName]
            });

            var gElement = createSvgElement('g', {
                'transform': 'translate(' + circleInfo.x + ', ' + circleInfo.y + ')'
            });

            circleElement.appendChild(animateTransformElement);
            gElement.appendChild(circleElement);
            svgElement.appendChild(gElement);
        }

        return $(svgElement);
    }

    function createLogoLayer() {

        var imgElement = $('<img>').attr({
            'id': 'idol_master_logo_layer',
            'src': 'img/logo.png',
            'width': '419',
            'height': '78',
            'style': 'opacity:0;filter:alpha(opacity=0);'
        }).fadeTo(700, 1);

        return imgElement;
    }

    function createContainer() {

        var divElement = $('<div>').attr({
            'id': 'idol_master_container'
        });

        return divElement;
    }

    var bgLayer = createBgLayer();
    var logoLayer = createLogoLayer();
    var container = createContainer();

    $('body').first().append(container.append(bgLayer, logoLayer));
}
